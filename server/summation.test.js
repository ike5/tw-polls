const {sum, sub} = require("./summation");

test("should add two numbers", () => {
  expect(sum(1, 3)).toBe(4);
});

test("should substract the two numbers", () => {
    expect(sub(5,3)).toBe(2)
})