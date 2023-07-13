import { sayHello } from "./unit1";

describe("sayHello Unit Test", () => {
    it("should return 'Hello, World'", () => {
        expect(sayHello()).toBe('Hello, World');
    });

    it("should return 'Hello, Loïc'", () => {
        expect(sayHello('Loïc')).toBe('Hello, Loïc')
    })
});
