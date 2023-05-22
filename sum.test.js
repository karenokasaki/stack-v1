const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  //here says the sum its not defined. why?
  expect(sum(1, 2)).toBe(3);
});

test("ter certeza que 2 + 2 é 4", () => {
  expect(sum(2, 2)).toBe(4);
});
