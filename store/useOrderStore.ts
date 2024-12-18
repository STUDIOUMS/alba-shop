import { Order, SuccessfulOrder } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface OrderStore {
  orders: Order[];
  placed: SuccessfulOrder | null;
  setOrder: (data: Order) => void;
  setPlacedOrder: (data: SuccessfulOrder) => void;
  changeCount: (id: string, count: string) => void;
  deleteOrder: (id: string) => void;
  deleteAllOrders: () => void;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set) => ({
        orders: [],
        placed: null,

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

        setPlacedOrder: (data) => set(() => ({ placed: data })),

        deleteOrder: (id) =>
          set((state) => {
            return { orders: state.orders.filter((order) => order.id !== id) };
          }),

        deleteAllOrders: () => set(() => ({ orders: [] })),
      }),
      {
        name: "orders",
        partialize: (state) => ({ orders: state.orders }),
      }
    )
  )
);
