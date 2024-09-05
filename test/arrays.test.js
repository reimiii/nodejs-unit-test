test("arrays", () => {
    const name = ["me", "am", "skrav"]
    expect(name).toContain("skrav")
    expect(name).toEqual(["me", "am", "skrav"])

    const person = [{name: "skravs", gender: "N/A"}, {name: "me", gender: "male"}]
    expect(person).toContainEqual({name: "skravs", gender: "N/A"})
    expect(person).toEqual([{name: "skravs", gender: "N/A"}, {name: "me", gender: "male"}])
})