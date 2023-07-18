/**
 *
 * @param {number} a
 * @param {number} b
 * @returns number
 */
const makeSum = (a, b) => a + b;

describe("toEqual Unit Test Suites", () => {
    it("should return 7", () => expect(makeSum(2, 5)).toEqual(7));
    it("should not return 7", () => expect(makeSum(1, 5)).not.toEqual(7));
});
