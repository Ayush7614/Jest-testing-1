import { ComplexFun } from "./complex";

describe("test the complex function", () => {
  it("check for the complex function ", () => {
    // arrange
    const result = ComplexFun(1, 2);
    // assert
    expect(result).toBe(30);
  });
});
