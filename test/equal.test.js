test("test toBe", () => {
    const name = "Mee";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Mee');
});

test("test toEqual", () => {
    let person = {id: "maid"};
    Object.assign(person, {name: "Mee"});

    expect(person).toEqual({id: "maid", name: "Mee"});
})