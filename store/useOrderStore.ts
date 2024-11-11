import { Order } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface OrderStore {
  orders: Order[];
  setOrder: (data: Omit<Order, "count">) => void;
  changeCount: (id: string, count: string) => void;
  deleteOrder: (id: string) => void;
  deleteAllOrders: () => void;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set) => ({
        orders: [],

        setOrder: (data) =>
          set((state) => {
            const newOrder = { ...data, count: 1 };
            const existOrder = state.orders.find((el) => {
              if (el.id === data.id) return el;
            });

            if (existOrder) {
              state.orders.map((el) => {
                if (el.id === data.id) {
                  el.count! += 1;
                  el.total = String(Number(el.count) * Number(el.price));
                }
                return el;
              });
            } else {
              state.orders = [...state.orders, newOrder];
            }
            return { orders: state.orders };
          }),

        changeCount: (id, count) =>
          set((state) => {
            const found = state.orders.find((order) => order.id === id);
            if (found) {
              found.count = Number(count);
              found.total = String(Number(found.price) * Number(count));
            }
            return { orders: state.orders };
          }),

        deleteOrder: (id) =>
          set((state) => {
            return { orders: state.orders.filter((order) => order.id !== id) };
          }),

        deleteAllOrders: () => set(() => ({ orders: [] })),
      }),
      { name: "orders" }
    )
  )
);
