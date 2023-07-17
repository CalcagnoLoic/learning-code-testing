import { retrieveSensorsData } from ".";
import { data } from "../../../../data/mock-homepage-data";

describe('sensorsAPI Api Unit Test Suites', () => {
    it('should return mocked data', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})
