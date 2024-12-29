import {
  PayData,
  PaymentResponse,
} from "@/app/(private)/checkout/components/types";
import { PAYMENT_URL } from "@/constants";

export type ApiMethod = "POST" | "PATCH" | "PUT" | "DELETE";

type MutateDataProps<T> = {
  uri: string;
  method: ApiMethod;
  body?: T;
};

export const getData = async <T>(uri: string): Promise<T> => {
  const response = await fetch(process.env.API_URL + uri);
  const data = await response.json();
  return data;
};

export const mutateData = async <T, K>(
  props: MutateDataProps<T>
): Promise<K> => {
  const { method, uri, body } = props;
  const response = await fetch(process.env.API_URL + uri, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

export const postPayment = async (
  payData: PayData
): Promise<PaymentResponse> => {
  const response = await fetch(PAYMENT_URL.pay, {
    body: JSON.stringify(payData),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};
