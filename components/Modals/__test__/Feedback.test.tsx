import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import FeedbackModal from "../FeedbackModal";
import { TestWrapper } from "@/utils/__tests__/testUtils";

describe("Feedback Modal", () => {
  it("Errors are showing up", async () => {
    render(
      <TestWrapper>
        <FeedbackModal close={() => {}} show={true} />
      </TestWrapper>
    );
    const btn = screen.getByRole("button", { name: "Отправить" });
    await userEvent.click(btn);
    expect(screen.getAllByText("Обязательное поле")).toBeDefined();
  });

  it("E-mail is wrong", async () => {
    render(
      <TestWrapper>
        <FeedbackModal close={() => {}} show={true} />
      </TestWrapper>
    );
    const btn = screen.getByRole("button", { name: "Отправить" });
    const emailField = screen.getByRole("textbox", { name: "E-mail" });
    await userEvent.type(emailField, "test");
    await userEvent.click(btn);
    expect(screen.getByText("Введите корректный E-mail")).toBeDefined();
  });
});
