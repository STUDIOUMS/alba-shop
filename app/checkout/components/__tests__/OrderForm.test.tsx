import { beforeAll, describe, expect, it } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderForm from "../OrderForm";
import { API_NOCK, TestWrapper } from "@/utils/__tests__/testUtils";
import { useOrderStore } from "@/store/useOrderStore";
import { fakeOrder, fakeResponse, fakeStateOrder } from "./constants";

describe("Order form", () => {
  beforeAll(() => {
    API_NOCK.post("/orders/", fakeOrder).reply(200, fakeResponse);
  });

  it("Order without online payment", async () => {
    const { result } = renderHook(() => useOrderStore(), {
      wrapper: TestWrapper,
    });

    result.current.orders = [fakeStateOrder];

    render(
      <TestWrapper>
        <OrderForm />
      </TestWrapper>
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: "Ваше ФИО *" }),
      "Test name"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "E-mail" }),
      "test@test.com"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "Телефон *" }),
      "+7 (999) 123-45-78"
    );
    await userEvent.click(
      screen.getByRole("radio", {
        name: "Оплата при доставке (Картой курьеру)",
      })
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Оформить заказ" })
    );

    await waitFor(() => {
      // expect(
      //   screen.getByText("Менеджер свяжется с Вами в течении 15 минут.")
      // ).toBeDefined();
    });
  });
});
