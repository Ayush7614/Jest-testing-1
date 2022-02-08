const complex = require("./complex.js");

describe("test the complex function", () => {
  // check
  test("complex test", () => {
    expect(complex(1, 2)).toBe(30);
  });
});
