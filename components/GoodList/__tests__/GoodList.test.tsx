import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GoodList from "..";
import {
  packFactory,
  productFactory,
} from "@/components/Good/__tests__/Factory";

const packs = packFactory.buildList(1);
const products = productFactory.buildList(3, {
  defaultPack: packs[0],
  relatedPacks: packs,
});

describe("Product list", () => {
  it("Product list is rendered", () => {
    render(<GoodList products={products} />);
    expect(screen.getAllByRole("button", { name: "-" })).toBeDefined();
    expect(screen.getAllByRole("button", { name: "+" })).toBeDefined();
    expect(screen.getAllByRole("button", { name: "В корзину" })).toBeDefined();
    expect(screen.getAllByText("В корзину")).toHaveLength(3);
  });

  it("Product list is empty", () => {
    render(<GoodList products={[]} />);
    expect(
      screen.getByText("В данной категории нет товаров по данным критериям")
    ).toBeDefined();
  });
});
