import {sayHello} from "../src/sayHello.js";

test("sayHello success", () => {
    expect(sayHello("Mee")).toBe("Hello Mee");
});

test.failing("sayHello error", () => {
    sayHello(null);
});

it.failing('should failing', () => {
    sayHello(null);
});

test("sayHello error matchers", () => {
    expect(() => sayHello(null)).toThrow();
});
