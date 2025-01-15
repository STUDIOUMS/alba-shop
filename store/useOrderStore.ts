import { Order } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface OrderStore {
  orders: Order[];
  setOrder: (data: Order) => void;
  paymentId: string | null;
  changeCount: (id: string, count: string) => void;
  deleteOrder: (id: string) => void;
  deleteAllOrders: () => void;
  setPaymentId: (id: string | null) => void;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set) => ({
        orders: [],
        paymentId: null,

        setOrder: (data) =>
          set((state) => {
            const existOrder = state.orders.find((el) => {
              if (el.id === data.id) return el;
            });

            if (existOrder) {
              state.orders.map((el) => {
                if (el.id === data.id) el.count += data.count;
                return el;
              });
            } else {
              state.orders = [...state.orders, data];
            }
            return { orders: state.orders };
          }),

        changeCount: (id, count) =>
          set((state) => {
            const found = state.orders.find((order) => order.id === id);
            if (found) {
              found.count = Number(count);
            }
            return { orders: state.orders };
          }),

        deleteOrder: (id) =>
          set((state) => {
            return { orders: state.orders.filter((order) => order.id !== id) };
          }),

        deleteAllOrders: () => set(() => ({ orders: [] })),

        setPaymentId: (id) => set(() => ({ paymentId: id })),
      }),
      {
        name: "orders",
        partialize: (state) => ({
          orders: state.orders,
          paymentId: state.paymentId,
        }),
      }
    )
  )
);
