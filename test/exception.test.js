import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("Me")).toThrow();
    expect(() => callMe("Me")).toThrow(MyException);
    expect(() => callMe("Me")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
    expect(callMe("Hil")).toBe("OK");
});
