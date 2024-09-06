import {sayHelloAsync} from "../src/async.js";

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Me")).resolves.toBe("Hello Me");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Me")).resolves.toBe("Hello Me");
});

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Me")).resolves.toBe("Hello Me");
});
