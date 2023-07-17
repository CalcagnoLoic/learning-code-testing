import { isInTestEnv } from ".";

const boolean = true;

describe("env Utils Unit Test Suites", () => {
    it("should be in env test", () => expect(isInTestEnv()).toBe(boolean));
    it("should not be in the env test", () => {
        process.env.NODE_ENV = "dev"
        expect(isInTestEnv()).not.toBe(boolean);
    });
});
