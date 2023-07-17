const me = {
    firstName: "Loïc",
    lastName: "Calcagno",
    age: 30,
};

const color = "tomato";

describe("toBe Unit Test Suites", () => {
    it("should be my firstName", () => expect(me.firstName).toBe("Loïc"));
    it("should be my age", () => expect(me.age).toBe(30));
    it("should not be tomato color", () => expect(color).not.toBe("blue"));
});
