import { beforeAll, describe, expect, it } from "vitest";
import { API_NOCK, TestWrapper } from "@/utils/__tests__/testUtils";
import { renderHook, waitFor } from "@testing-library/react";
import useGetData from "../useGetData";
import { Category, ServerResponse } from "@/types";
import { categoryFactory } from "@/utils/__tests__/Factory";

const mockedCats = categoryFactory.buildList(5);
const mockedResponse: ServerResponse<Category> = {
  count: 5,
  next: null,
  previous: null,
  results: mockedCats,
};

describe("useGetData", () => {
  beforeAll(() => {
    API_NOCK.get("/catalog/categories/").reply(200, mockedResponse);
  });

  it("Getting cats", async () => {
    const { result } = renderHook(
      () =>
        useGetData<ServerResponse<Category>>({
          key: ["catalog"],
          uri: `/catalog/categories/`,
        }),
      {
        wrapper: TestWrapper,
      }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.results).toHaveLength(5);
  });
});
