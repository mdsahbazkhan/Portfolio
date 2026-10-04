"use client";

import Script from "next/script";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Heart, LoaderCircle, X } from "lucide-react";

type PaymentStatus = "SUCCESS" | "PENDING" | "FAILED";
type CreateOrderResponse = {
  orderId: string;
  paymentSessionId: string;
  environment: "sandbox" | "production";
};
type StatusResponse = {
  orderId: string;
  status: PaymentStatus;
  amount?: number;
};
type CashfreeResult = {
  error?: unknown;
  redirect?: boolean;
  paymentDetails?: { paymentMessage?: string };
};
type CashfreeClient = {
  checkout: (options: {
    paymentSessionId: string;
    redirectTarget: "_self";
  }) => Promise<CashfreeResult>;
};

declare global {
  interface Window {
    Cashfree?: (options: { mode: "sandbox" | "production" }) => CashfreeClient;
  }
}

const amounts = [50, 100, 250] as const;
const presets = [...amounts, "custom"] as const;
const minAmount = 10;
const maxAmount = 10_000;
const orderStorageKey = "support-order-id";

function readStoredOrderId() {
  try {
    return window.sessionStorage.getItem(orderStorageKey);
  } catch {
    return null;
  }
}

function saveStoredOrderId(orderId: string) {
  try {
    window.sessionStorage.setItem(orderStorageKey, orderId);
  } catch {
    // The return URL still carries the order ID if session storage is unavailable.
  }
}

function clearStoredOrderId() {
  try {
    window.sessionStorage.removeItem(orderStorageKey);
  } catch {
    // Storage can be disabled; the visible return URL is cleaned separately.
  }
}

export function SupportMyWork() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const checkoutStarted = useRef(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [selected, setSelected] = useState<number | "custom">(100);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState<PaymentStatus | null>(null);
  const [confirmedAmount, setConfirmedAmount] = useState<number | null>(null);
  const [isResultFlow, setIsResultFlow] = useState(false);

  const amount = selected === "custom" ? Number(customAmount) : selected;
  const amountIsValid =
    Number.isFinite(amount) &&
    amount >= minAmount &&
    amount <= maxAmount &&
    Math.round(amount * 100) === amount * 100;
  const isBusy = isCreatingOrder || isCheckingStatus;

  const showDialog = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const checkStatus = useCallback(async (id: string) => {
    setIsCheckingStatus(true);
    setError("");
    try {
      const response = await fetch(
        `/api/payment/status?order_id=${encodeURIComponent(id)}`,
        { cache: "no-store" },
      );
      const data: StatusResponse | { error?: string } = await response.json();
      if (
        !response.ok ||
        !("status" in data) ||
        !["SUCCESS", "PENDING", "FAILED"].includes(data.status)
      )
        throw new Error(
          "error" in data ? data.error : "Unable to check payment status.",
        );
      setOrderId(data.orderId);
      setStatus(data.status);
      setConfirmedAmount(typeof data.amount === "number" ? data.amount : null);
    } catch {
      setError("We couldn't confirm the payment right now. Please check again.");
    } finally {
      setIsCheckingStatus(false);
      const url = new URL(window.location.href);
      if (url.searchParams.get("order_id") === id) {
        url.searchParams.delete("order_id");
        url.searchParams.delete("payment_return");
        window.history.replaceState({}, "", url);
      }
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get("order_id");
    const idFromStorage = readStoredOrderId();
    const isPaymentReturn = params.get("payment_return") === "1";
    const id = idFromUrl || idFromStorage;
    if (!id && !isPaymentReturn) return;

    setIsResultFlow(true);
    setStatus(null);
    setConfirmedAmount(null);
    setError("");
    showDialog();
    if (!id) {
      setError("We couldn't determine the payment order. Please return to the support form and try again.");
      return;
    }
    setOrderId(id);
    if (!/^support_[a-f0-9]{32}$/.test(id)) {
      setError("This payment return did not include a valid order ID.");
      return;
    }
    saveStoredOrderId(id);
    void checkStatus(id);
  }, [checkStatus, showDialog]);

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    if (status !== "PENDING") {
      setError("");
    }
  };

  const createOrderAndCheckout = async () => {
    if (!amountIsValid || isBusy || checkoutStarted.current) return;
    checkoutStarted.current = true;
    setIsResultFlow(false);
    setError("");
    setStatus(null);
    setOrderId("");
    setIsCreatingOrder(true);

    try {
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          name: name.trim(),
          email: email.trim(),
        }),
      });
      const data: CreateOrderResponse | { error?: string } =
        await response.json();
      if (!response.ok || !("paymentSessionId" in data)) {
        throw new Error(
          "error" in data ? data.error : "Unable to start payment.",
        );
      }

      saveStoredOrderId(data.orderId);
      setOrderId(data.orderId);
      if (!window.Cashfree)
        throw new Error(
          "The secure checkout could not be loaded. Please try again.",
        );
      const cashfree = window.Cashfree({ mode: data.environment });
      const result = await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: "_self",
      });

      if (result.error) {
        checkoutStarted.current = false;
        await checkStatus(data.orderId);
      } else if (result.paymentDetails) {
        checkoutStarted.current = false;
        await checkStatus(data.orderId);
      }
      // In redirect checkout, Cashfree returns the visitor to the configured return URL.
    } catch (cause) {
      checkoutStarted.current = false;
      setError(
        cause instanceof Error
          ? cause.message
          : "Unable to start payment. Please try again.",
      );
    } finally {
      setIsCreatingOrder(false);
    }
  };

  const retryPayment = () => {
    clearStoredOrderId();
    const url = new URL(window.location.href);
    url.searchParams.delete("order_id");
    url.searchParams.delete("payment_return");
    window.history.replaceState({}, "", url);
    setStatus(null);
    setIsResultFlow(false);
    setOrderId("");
    setError("");
    checkoutStarted.current = false;
  };

  return (
    <>
      <Script
        src="https://sdk.cashfree.com/js/v3/cashfree.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() =>
          setError(
            "Secure checkout did not load. Refresh the page and try again.",
          )
        }
      />

      <aside
        className="border border-white/10 bg-white/[.02] p-5 sm:p-6"
        aria-labelledby="support-heading"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">A small way to say thanks</p>
            <h3
              id="support-heading"
              className="text-xl font-semibold tracking-tight text-white"
            >
              Support My Work
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
              If my projects or engineering work helped you, you can support
              what I build next.
            </p>
          </div>
          <Heart
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-teal-100/70"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            clearStoredOrderId();
            const url = new URL(window.location.href);
            url.searchParams.delete("order_id");
            url.searchParams.delete("payment_return");
            window.history.replaceState({}, "", url);
            setIsResultFlow(false);
            setStatus(null);
            setError("");
            showDialog();
          }}
          className="mt-5 inline-flex items-center gap-2 border-b border-teal-100/50 pb-1 text-sm font-medium text-teal-100 transition-colors hover:border-teal-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090b0d]"
        >
          Support My Work <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </aside>

      <dialog
        ref={dialogRef}
        aria-labelledby="support-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        onClose={() => {
          if (!isResultFlow) checkoutStarted.current = false;
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-lg border border-white/10 bg-[#0d1112] p-0 text-gray-100 shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm open:animate-[support-in_.18s_ease-out]"
      >
        <div className="flex max-h-[min(90dvh,760px)] flex-col overflow-y-auto p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">Support my work</p>
              <h2
                id="support-dialog-title"
                className="text-2xl font-semibold tracking-tight text-white"
              >
                {status === "SUCCESS"
                  ? "Payment Successful"
                  : status === "PENDING"
                    ? "Payment Pending"
                    : status === "FAILED"
                      ? "Payment Failed"
                      : isResultFlow
                        ? isCheckingStatus
                          ? "Checking payment status"
                          : "Unable to verify payment"
                        : "Choose an amount"}
              </h2>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close support dialog"
              className="rounded-sm p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {status === "SUCCESS" ? (
            <div role="status" className="space-y-4">
              <p className="flex items-center gap-2 text-teal-100">
                <Check className="h-5 w-5" /> Thank you for supporting my work.
              </p>
              {confirmedAmount !== null && (
                <p className="text-3xl font-semibold text-white">
                  ₹
                  {confirmedAmount.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </p>
              )}
              <p className="break-all text-xs text-gray-500">
                Order ID: {orderId}
              </p>
              <Link
                href="/"
                onClick={closeDialog}
                className="mt-2 inline-flex items-center gap-2 text-sm text-teal-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
              >
                Back to portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : status === "PENDING" ? (
            <div role="status" className="space-y-5">
              <p className="text-sm leading-relaxed text-gray-300">
                Your payment is still being processed. Please wait while we
                confirm it, or check again in a moment.
              </p>
              {error && (
                <p role="alert" className="text-sm text-rose-300">
                  {error}
                </p>
              )}
              <button
                type="button"
                onClick={() => void checkStatus(orderId)}
                disabled={isBusy}
                className="inline-flex items-center gap-2 border border-teal-100/30 px-4 py-2.5 text-sm text-teal-100 hover:bg-teal-100/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 disabled:opacity-50"
              >
                {isCheckingStatus && (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                )}
                {isCheckingStatus ? "Checking payment…" : "Check status"}
              </button>
              <Link
                href="/"
                onClick={closeDialog}
                className="ml-4 text-sm text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
              >
                Back to portfolio
              </Link>
            </div>
          ) : status === "FAILED" ? (
            <div role="status" className="space-y-5">
              <p className="text-sm leading-relaxed text-gray-300">
                Cashfree reports no successful payment for this order. If your
                bank shows a debit, it may take time to reverse a pending
                transaction.
              </p>
              <button
                type="button"
                onClick={retryPayment}
                className="inline-flex items-center gap-2 border border-teal-100/30 px-4 py-2.5 text-sm text-teal-100 hover:bg-teal-100/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
              >
                Try again <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/"
                onClick={closeDialog}
                className="ml-4 text-sm text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
              >
                Back to portfolio
              </Link>
            </div>
          ) : isResultFlow ? (
            <div role="status" aria-live="polite" className="space-y-5">
              {isCheckingStatus ? (
                <p className="flex items-center gap-3 text-sm text-gray-300">
                  <LoaderCircle className="h-5 w-5 animate-spin text-teal-100" />
                  Checking payment status… Please wait.
                </p>
              ) : (
                <>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {error ||
                      "We couldn't confirm the payment right now. Please check again."}
                  </p>
                  {/^support_[a-f0-9]{32}$/.test(orderId) && (
                    <button
                      type="button"
                      onClick={() => void checkStatus(orderId)}
                      disabled={isBusy}
                      className="inline-flex items-center gap-2 border border-teal-100/30 px-4 py-2.5 text-sm text-teal-100 hover:bg-teal-100/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 disabled:opacity-50"
                    >
                      {isCheckingStatus && (
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                      )}
                      {isCheckingStatus ? "Checking payment…" : "Check status"}
                    </button>
                  )}
                  <Link
                    href="/"
                    onClick={closeDialog}
                    className="ml-4 text-sm text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
                  >
                    Back to portfolio
                  </Link>
                </>
              )}
            </div>
          ) : (
            <>
              <p className="mb-5 text-sm text-gray-400">
                Choose any amount between ₹10 and ₹10,000.
              </p>
              <div
                className="grid grid-cols-4 gap-2"
                role="group"
                aria-label="Choose donation amount"
              >
                {presets.map((preset) => {
                  const isSelected = selected === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => {
                        setSelected(preset);
                        setError("");
                      }}
                      className={`min-h-11 border px-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 ${isSelected ? "border-teal-100 bg-teal-100/10 text-teal-100" : "border-white/10 text-gray-300 hover:border-teal-100/40 hover:text-white"}`}
                    >
                      {preset === "custom" ? "Custom" : `₹${preset}`}
                    </button>
                  );
                })}
              </div>

              {selected === "custom" && (
                <div className="mt-4">
                  <label
                    htmlFor="support-amount"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Custom amount (INR)
                  </label>
                  <input
                    id="support-amount"
                    type="number"
                    min={minAmount}
                    max={maxAmount}
                    step="0.01"
                    inputMode="decimal"
                    value={customAmount}
                    onChange={(event) => setCustomAmount(event.target.value)}
                    placeholder="e.g. 500"
                    className="w-full border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-600 focus:border-teal-100/60 focus:outline-none focus:ring-2 focus:ring-teal-100/40"
                  />
                  {customAmount && !amountIsValid && (
                    <p className="mt-2 text-xs text-rose-300">
                      Enter ₹10–₹10,000, up to two decimal places.
                    </p>
                  )}
                </div>
              )}

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="support-name"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Name <span className="text-gray-600">(optional)</span>
                  </label>
                  <input
                    id="support-name"
                    type="text"
                    maxLength={80}
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white focus:border-teal-100/60 focus:outline-none focus:ring-2 focus:ring-teal-100/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="support-email"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Email <span className="text-gray-600">(optional)</span>
                  </label>
                  <input
                    id="support-email"
                    type="email"
                    maxLength={254}
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white focus:border-teal-100/60 focus:outline-none focus:ring-2 focus:ring-teal-100/40"
                  />
                </div>
              </div>

              {error && (
                <p role="alert" className="mt-4 text-sm text-rose-300">
                  {error}
                </p>
              )}
              <button
                type="button"
                onClick={() => void createOrderAndCheckout()}
                disabled={
                  !amountIsValid ||
                  isBusy ||
                  !scriptReady ||
                  checkoutStarted.current
                }
                className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 bg-teal-100 px-5 py-3 text-sm font-semibold text-[#090b0d] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1112] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isCreatingOrder ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" /> Preparing
                    secure checkout…
                  </>
                ) : (
                  <>
                    Continue to payment <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              {!scriptReady && (
                <p className="mt-3 text-center text-xs text-gray-500">
                  Loading secure checkout…
                </p>
              )}
              <p className="mt-4 text-center text-xs text-gray-500">
                Payments are securely handled by Cashfree.
              </p>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
