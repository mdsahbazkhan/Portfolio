import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { siteConfig } from "@/data/site";
import {
  cashfreeHeaders,
  getCashfreeConfig,
  isValidDonationAmount,
} from "@/lib/cashfree";

export const runtime = "nodejs";

type CreateOrderPayload = {
  order_id?: string;
  payment_session_id?: string;
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = body as Record<string, unknown>;
  const amount = payload.amount;
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";

  if (!isValidDonationAmount(amount)) {
    return NextResponse.json(
      {
        error:
          "Choose an amount between ₹10 and ₹10,000 (up to two decimal places).",
      },
      { status: 400 },
    );
  }
  if (name.length > 80) {
    return NextResponse.json(
      { error: "Name must be 80 characters or fewer." },
      { status: 400 },
    );
  }
  if (
    email.length > 254 ||
    (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  ) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const config = getCashfreeConfig();
    const orderId = `support_${randomUUID().replaceAll("-", "")}`;
    const requestId = randomUUID();
    const returnBaseUrl = process.env.SITE_URL ?? siteConfig.siteUrl;
    const returnUrl = new URL("/", returnBaseUrl);
    if (
      config.environment === "production" &&
      returnUrl.protocol !== "https:"
    ) {
      throw new Error("Production payment returns require an HTTPS site URL.");
    }
    returnUrl.searchParams.set("order_id", "{order_id}");

    const cashfreeResponse = await fetch(`${config.baseUrl}/orders`, {
      method: "POST",
      headers: {
        ...cashfreeHeaders(config.appId, config.secretKey, requestId),
        "x-idempotency-key": requestId,
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: `support_${randomUUID().replaceAll("-", "").slice(0, 24)}`,
          customer_phone: "9999999999",
          ...(name ? { customer_name: name } : {}),
          ...(email ? { customer_email: email } : {}),
        },
        order_note: "Portfolio support contribution",
        order_meta: { return_url: returnUrl.toString() },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    if (!cashfreeResponse.ok) {
      console.error("Cashfree order creation failed", {
        status: cashfreeResponse.status,
        requestId,
      });
      return NextResponse.json(
        { error: "We couldn't start payment. Please try again shortly." },
        { status: 502 },
      );
    }

    const result = (await cashfreeResponse.json()) as CreateOrderPayload;
    if (!result.order_id || !result.payment_session_id) {
      console.error("Cashfree order response was incomplete", { requestId });
      return NextResponse.json(
        { error: "We couldn't start payment. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      orderId: result.order_id,
      paymentSessionId: result.payment_session_id,
      environment: config.environment,
    });
  } catch (error) {
    console.error("Cashfree order request failed", {
      reason: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      {
        error: "Payment service is temporarily unavailable. Please try again.",
      },
      { status: 503 },
    );
  }
}
