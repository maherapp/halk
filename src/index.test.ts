import { test, describe } from "node:test";
import assert from "node:assert";
import { halk } from "./index.js";

describe("halk function", () => {
    test("should return the expected greeting message", () => {
        const result = halk();
        assert.strictEqual(result, "Hello from halk!");
    });

    test("should return a string", () => {
        const result = halk();
        assert.strictEqual(typeof result, "string");
    });

    test("should not return an empty string", () => {
        const result = halk();
        assert.ok(result.length > 0);
    });

    test('should contain the word "halk"', () => {
        const result = halk();
        assert.ok(result.includes("halk"));
    });
});
