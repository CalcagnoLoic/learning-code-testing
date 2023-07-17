/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const makeSum = (a, b) => a + b;

/**
 *
 * @param {string} a
 * @param {number} b
 * @returns {string}
 */
const makeString = (a, b) => a * b;

describe("toBeNan Unit Test Suites", () => {
    it("should not be NaN", () => expect(makeSum(1, 2)).not.toBeNaN());
    it("should return NaN", () => expect(makeString("S", 2)).toBeNaN());
});
