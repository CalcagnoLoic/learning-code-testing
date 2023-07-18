/**
 *
 * @returns {array}
 */
const getFriends = () => ["mike", "john", "lucie", "anna"];

describe("ToContain Unit Test Suites", () => {
    it("should contain the name in array", () =>
        expect(getFriends()).toContain("mike"));
    it("should not contain the name into array", () =>
        expect(getFriends()).not.toContain("anne"));
});
