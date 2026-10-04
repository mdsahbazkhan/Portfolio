import { NextResponse } from "next/server";
import { cashfreeHeaders, getCashfreeConfig } from "@/lib/cashfree";

export const runtime = "nodejs";

type CashfreeOrder = { order_status?: string; order_amount?: number };
type CashfreePayment = { payment_status?: string };
export type PaymentStatus = "SUCCESS" | "PENDING" | "FAILED";

export async function GET(request: Request) {
  const orderId = new URL(request.url).searchParams.get("order_id");
  if (!orderId || !/^support_[a-f0-9]{32}$/.test(orderId)) {
    return NextResponse.json({ error: "Invalid order ID." }, { status: 400 });
  }

  try {
    const config = getCashfreeConfig();
    const headers = cashfreeHeaders(config.appId, config.secretKey);
    const [orderResponse, paymentsResponse] = await Promise.all([
      fetch(`${config.baseUrl}/orders/${encodeURIComponent(orderId)}`, {
        headers,
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      }),
      fetch(
        `${config.baseUrl}/orders/${encodeURIComponent(orderId)}/payments`,
        {
          headers,
          cache: "no-store",
          signal: AbortSignal.timeout(10_000),
        },
      ),
    ]);

    if (orderResponse.status === 404) {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }
    if (!orderResponse.ok || !paymentsResponse.ok) {
      console.error("Cashfree payment status lookup failed", {
        orderStatus: orderResponse.status,
        paymentsStatus: paymentsResponse.status,
      });
      return NextResponse.json(
        { error: "Unable to check payment status." },
        { status: 502 },
      );
    }

    const order = (await orderResponse.json()) as CashfreeOrder;
    const payments = (await paymentsResponse.json()) as CashfreePayment[];
    const successful =
      Array.isArray(payments) &&
      payments.some((payment) => payment.payment_status === "SUCCESS");
    const pending =
      Array.isArray(payments) &&
      payments.some((payment) => payment.payment_status === "PENDING");
    let status: PaymentStatus = "PENDING";

    if (order.order_status === "PAID" || successful) status = "SUCCESS";
    else if (pending) status = "PENDING";
    else if (
      order.order_status === "EXPIRED" ||
      order.order_status === "TERMINATED" ||
      (Array.isArray(payments) && payments.length > 0)
    ) {
      status = "FAILED";
    }

    return NextResponse.json({
      orderId,
      status,
      ...(typeof order.order_amount === "number"
        ? { amount: order.order_amount }
        : {}),
    });
  } catch (error) {
    console.error("Cashfree payment status request failed", {
      reason: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { error: "Unable to check payment status." },
      { status: 503 },
    );
  }
}
