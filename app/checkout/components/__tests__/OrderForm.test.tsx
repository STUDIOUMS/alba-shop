import { beforeAll, describe, expect, it } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderForm from "../OrderForm";
import { API_NOCK, TestWrapper } from "@/utils/__tests__/testUtils";
import { useOrderStore } from "@/store/useOrderStore";
import { fakeOrder, fakeResponse, fakeStateOrder } from "./constants";

describe("Checkout form", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useOrderStore(), {
      wrapper: TestWrapper,
    });
    result.current.orders = [fakeStateOrder];
  });

  it("Order without online payment", async () => {
    API_NOCK.post("/orders/", fakeOrder).reply(200, fakeResponse);

    render(
      <TestWrapper>
        <OrderForm />
      </TestWrapper>
    );

    const fioField = screen.getByRole("textbox", { name: "Ваше ФИО *" });
    const emailField = screen.getByRole("textbox", { name: "E-mail" });
    const phoneField = screen.getByRole("textbox", { name: "Телефон *" });
    const payField = screen.getByRole("radio", {
      name: "Оплата при доставке (Картой курьеру)",
    });

    await userEvent.type(fioField, "Test name");
    await userEvent.type(emailField, "test@test.com");
    await userEvent.type(phoneField, "+7 (999) 123-45-78");
    await userEvent.click(payField);
    await userEvent.click(screen.getByRole("button", { name: "Оформить заказ" }));

    expect(screen.getByRole("progressbar", { name: "Loading" })).toBeDefined();

    await waitFor(() => {
      // expect(
      //   screen.getByText("Менеджер свяжется с Вами в течении 15 минут.")
      // ).toBeDefined();
    });
  });
});
