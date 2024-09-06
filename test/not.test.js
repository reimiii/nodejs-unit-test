test("string.not", () => {
    const name = "Skravy fem";

    expect(name).not.toBe("male");
    expect(name).not.toEqual("boy");
    expect(name).not.toMatch(/m/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});
