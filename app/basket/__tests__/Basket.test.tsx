import { act, render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestWrapper } from "@/utils/__tests__/testUtils";
import BasketPage from "../page";
import { useOrderStore } from "@/store/useOrderStore";
import { fakeStateOrder } from "@/app/checkout/components/__tests__/constants";

describe("Basket page", () => {
  it("Basket is empty", () => {
    render(
      <TestWrapper>
        <BasketPage />
      </TestWrapper>
    );
    expect(screen.getByText("Ваша корзина пуста")).toBeDefined();
    expect(screen.getByRole("link", { name: "Вернуться на главную" })).toBeDefined();
  });

  it("Basket contains orders", () => {
    const { result } = renderHook(() => useOrderStore(), { wrapper: TestWrapper });
    act(() => {
      result.current.orders = [fakeStateOrder];
    });
    render(
      <TestWrapper>
        <BasketPage />
      </TestWrapper>
    );
    expect(screen.getByRole("textbox", { name: "Количество позиций" }));
    expect(screen.getByRole("button", { name: "Очистить корзину" }));
    expect(screen.getByText("Итого:"));
    expect(screen.getByRole("button", { name: "Перейти к оформлению" }));
  });
});
