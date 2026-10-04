export const CASHFREE_API_VERSION = "2026-01-01";
export const MIN_DONATION_AMOUNT = 10;
export const MAX_DONATION_AMOUNT = 10_000;

export type CashfreeEnvironment = "sandbox" | "production";

export function getCashfreeConfig() {
  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;
  const environment = process.env.CASHFREE_ENV ?? "sandbox";

  if (!appId || !secretKey) {
    throw new Error("Cashfree credentials are not configured.");
  }
  if (environment !== "sandbox" && environment !== "production") {
    throw new Error("CASHFREE_ENV must be sandbox or production.");
  }

  return {
    appId,
    secretKey,
    environment: environment as CashfreeEnvironment,
    baseUrl:
      environment === "production"
        ? "https://api.cashfree.com/pg"
        : "https://sandbox.cashfree.com/pg",
  };
}

export function cashfreeHeaders(
  appId: string,
  secretKey: string,
  requestId?: string,
) {
  return {
    "x-client-id": appId,
    "x-client-secret": secretKey,
    "x-api-version": CASHFREE_API_VERSION,
    ...(requestId ? { "x-request-id": requestId } : {}),
    "content-type": "application/json",
    accept: "application/json",
  };
}

export function isValidDonationAmount(amount: unknown): amount is number {
  return (
    typeof amount === "number" &&
    Number.isFinite(amount) &&
    amount >= MIN_DONATION_AMOUNT &&
    amount <= MAX_DONATION_AMOUNT &&
    Math.round(amount * 100) === amount * 100
  );
}
