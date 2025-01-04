import { describe, expect, it } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import useMutateData from "../useMutateData";
import { Feedback, FeedbackResponse } from "@/types";
import { API_NOCK, TestWrapper } from "@/utils/__tests__/testUtils";

const mockedFeedback: Feedback = {
  sender: "Name",
  senderPhone: "1234567890",
  senderEmail: "test@email.com",
  message: "Test message",
};

const mockedResponse: FeedbackResponse = {
  createdAt: new Date(),
  updatedAt: new Date(),
  id: 1,
  ...mockedFeedback,
};

describe("useMutateData", () => {
  it("Sending feedback - POST", async () => {
    API_NOCK.post("/web/feedback/", mockedFeedback).reply(200, mockedResponse);

    const { result } = renderHook(
      () =>
        useMutateData<Feedback, FeedbackResponse>({
          key: ["feedback"],
          method: "POST",
          uri: "/web/feedback/",
        }),
      { wrapper: TestWrapper }
    );

    act(() => {
      result.current.mutate(mockedFeedback);
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.sender).toStrictEqual("Name");
    expect(result.current.data?.senderPhone).toStrictEqual("1234567890");
    expect(result.current.data?.senderEmail).toStrictEqual("test@email.com");
  });
});
