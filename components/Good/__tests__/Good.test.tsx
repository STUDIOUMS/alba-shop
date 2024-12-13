import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Good from "..";
import { packFactory, productFactory } from "./Factory";

const testPacks = packFactory.buildList(2);
const testPackSale = packFactory.build({ oldPrice: "300" });
const testProduct = productFactory.build();

describe("Catalog product card", () => {
  it("Product with packs", () => {
    render(
      <Good
        el={productFactory.build({
          defaultPack: testPacks[0],
          relatedPacks: testPacks,
        })}
      />
    );
    expect(screen.getByText("100")).toBeDefined();
    expect(screen.getByText("1 шт")).toBeDefined();
    expect(screen.getByText("2 шт")).toBeDefined();
    expect(screen.getByRole("button", { name: "В корзину" })).toBeDefined();
  });

  it("Product without packs", () => {
    render(<Good el={testProduct} />);
    expect(
      screen.getByRole("button", { name: "Сообщить о наличии" })
    ).toBeDefined();
  });

  it("Product with sale", () => {
    render(
      <Good
        el={productFactory.build({
          relatedPacks: [testPackSale],
          defaultPack: testPackSale,
        })}
      />
    );
    expect(screen.getByText("sale")).toBeDefined();
  });

  it("Product with hit", () => {
    render(<Good el={productFactory.build({ hit: true })} />);
    expect(screen.getByText("hit")).toBeDefined();
  });

  it("Product with new", () => {
    render(<Good el={productFactory.build({ new: true })} />);
    expect(screen.getByText("new")).toBeDefined();
  });
});
