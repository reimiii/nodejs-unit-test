test("strings", () => {
    const n = "Hilmi AM"

    expect(n).toBe("Hilmi AM")
    expect(n).toEqual("Hilmi AM")
    expect(n).toMatch(/lmi/)
})