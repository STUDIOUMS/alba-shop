export type PaymentStatus = {
  status: "ok" | "false";
  error?: string;
  orderId?: string;
  paymentId?: string;
};
