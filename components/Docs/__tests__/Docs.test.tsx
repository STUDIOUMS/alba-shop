import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Docs from "..";
import { DocType } from "@/types";

const testDocs: DocType[] = [
  {
    file: "https://test.doc",
    id: 1,
    name: "Test document 1",
    product: 1,
  },
  {
    file: "https://test.doc",
    id: 2,
    name: "Test document 2",
    product: 1,
  },
];

describe("Documents", () => {
  it("Documents list", () => {
    render(<Docs docs={testDocs} />);
    expect(screen.getAllByText(/Test document/)).toBeDefined();
  });

  it("Documents list is empty", () => {
    render(<Docs docs={[]} />);
    expect(screen.getByText("Документов нет")).toBeDefined();
  });
});
