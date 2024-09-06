import {sayHelloAsync} from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("Me");
    console.info(result);
    expect(result).toBe("Hello Me");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("Me")).resolves.toBe("Hello Me");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
