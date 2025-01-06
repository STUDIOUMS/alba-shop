import { beforeAll, describe, expect, it } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderForm from "../OrderForm";
import { TestWrapper } from "@/utils/__tests__/testUtils";
import { useOrderStore } from "@/store/useOrderStore";
import { fakeStateOrder } from "./constants";

describe("Checkout form", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useOrderStore(), {
      wrapper: TestWrapper,
    });
    result.current.orders = [fakeStateOrder];
  });

  it("Changing button text depending on payment", async () => {
    render(
      <TestWrapper>
        <OrderForm />
      </TestWrapper>
    );

    expect(screen.getByRole("button", { name: "Оплатить заказ" }));

    await userEvent.click(
      screen.getByRole("radio", {
        name: "Оплата при доставке (Картой курьеру)",
      })
    );

    expect(screen.getByRole("button", { name: "Оформить заказ" }));

    await userEvent.click(
      screen.getByRole("radio", {
        name: "Оплатить онлайн",
      })
    );

    expect(screen.getByRole("button", { name: "Оплатить заказ" }));
  });
});
