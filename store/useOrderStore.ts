import { Order } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface OrderStore {
  orders: Order[];
  setOrder: (data: Order) => void;
  payUrlSuccess: string | null;
  payUrlFail: string | null;
  changeCount: (id: string, count: string) => void;
  deleteOrder: (id: string) => void;
  deleteAllOrders: () => void;
  setPayUrls: (success: string, fail: string) => void;
  deletePayUrls: () => void;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set) => ({
        orders: [],
        payUrlSuccess: null,
        payUrlFail: null,

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

        setPayUrls: (success, fail) =>
          set(() => ({ payUrlSuccess: success, payUrlFail: fail })),

        deletePayUrls: () => set(() => ({ payUrlFail: null, payUrlSuccess: null })),
      }),
      {
        name: "orders",
        partialize: (state) => ({
          orders: state.orders,
          payUrlFail: state.payUrlFail,
          payUrlSuccess: state.payUrlSuccess,
        }),
      }
    )
  )
);
