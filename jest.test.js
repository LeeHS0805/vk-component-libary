test("test common matcher", () => {
  expect(4).not.toBe(5);
});
test("test common matcher1", () => {
  expect(4).toBeLessThan(5);
  expect(1).toBeTruthy();
});
