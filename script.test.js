const { microwaveMayhem } = require("./script");

test("7 people, 2min food and 13mins left", () => {
  const actual = microwaveMayhem(7, 2, 13);
  const expected = "I am too hungry to survive!";
  expect(actual).toBe(expected);
});

test("5 people, 4min food and 7mins left", () => {
  const actual = microwaveMayhem(5, 4, 7);
  const expected = "I am too hungry to survive!";
  expect(actual).toBe(expected);
});

test("2 people, 3min food and 12mins left", () => {
  const actual = microwaveMayhem(2, 3, 12);
  const expected = "I will survive!";
  expect(actual).toBe(expected);
});

test("3 people, 4min food and -1mins left", () => {
  const actual = microwaveMayhem(3, 4, -1);
  const expected = "I am too hungry to survive!";
  expect(actual).toBe(expected);
});
