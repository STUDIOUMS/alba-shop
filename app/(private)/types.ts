export type PaymentStatus = {
  status: "ok" | "false";
  message: string;
  orderId: string;
  paymentId: string;
};
