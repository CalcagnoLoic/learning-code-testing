/**
 *
 * @returns {string}
 */
const getName = () => "thomas";

const getAge = 31;

describe("toBeDefined Unit Test Suites", () => {
    it("should return something", () => expect(getName()).toBeDefined());
    it("should return something", () => expect(getAge).toBeDefined());
});
