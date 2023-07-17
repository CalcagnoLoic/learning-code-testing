import Pagination from ".";

describe("getNumberOfPages unit test", () => {
    it("should return anything", () =>
        expect(Pagination.getNumberOfPages(12)).toBeDefined());

    it("should return 0", () =>
        expect(Pagination.getNumberOfPages(0)).toEqual(0));

    it("should return 1 page", () =>
        expect(Pagination.getNumberOfPages(7)).toEqual(1));

    it("should return 5 pages", () =>
        expect(Pagination.getNumberOfPages(34)).toEqual(5));
});