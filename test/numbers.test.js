test("number matchers", () => {
    const v = 2 + 2
    expect(v).toBeGreaterThan(3)
    expect(v).toBeGreaterThanOrEqual(3.5)
    expect(v).toBeLessThan(5)
    expect(v).toBeLessThanOrEqual(4.5)

    expect(v).toBe(4)
    expect(v).toEqual(4)
})