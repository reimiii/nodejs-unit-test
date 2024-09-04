import {sum} from "../src/sum.js";

test("test sum", () => {
    const res = sum(1, 2);

    expect(res).toBe(3)
})