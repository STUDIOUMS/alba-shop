import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { TestWrapper } from "@/utils/__tests__/testUtils";
import { usePriceImg } from "../usePriceImg";
import { packFactory } from "@/components/Good/__tests__/Factory";

const packs = packFactory.buildList(2);

describe("usePriceImg", () => {
  it("Pack exists", () => {
    const { result } = renderHook(
      () =>
        usePriceImg({
          defaultPack: packs[0],
          packs: packs,
        }),
      { wrapper: TestWrapper }
    );

    expect(result.current.choosePack).toBeTypeOf("function");
    expect(result.current.noPack).toBe(false);
    expect(result.current.currentPack).toStrictEqual(packs[0]);
  });

  it("No pack", () => {
    const { result } = renderHook(
      () =>
        usePriceImg({
          defaultPack: undefined,
          packs: [],
        }),
      { wrapper: TestWrapper }
    );
    expect(result.current.choosePack).toBeTypeOf("function");
    expect(result.current.noPack).toBe(true);
    expect(result.current.currentPack).toStrictEqual({
      id: 0,
      img: "",
      pack: { id: 0, name: "" },
      price: "",
      oldPrice: "",
      product: 0,
    });
  });
});
