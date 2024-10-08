import {getBalance} from "../src/async.js";

test("mock async function", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000);


    await expect(getBalance("Me", from)).resolves.toEqual({
        name: "Me",
        balance: 1000
    })

    console.info(from.mock.calls.length)

    expect(from.mock.calls.length).toBe(1);

    await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Ups"));

    await getBalance("Me", from);
});

test("mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Me", from)).rejects.toBe("Rejected");
});
