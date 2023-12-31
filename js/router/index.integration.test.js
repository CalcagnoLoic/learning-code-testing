/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import { router } from ".";

describe("Router Integration Test Suites", () => {
    it("should render the Sign In Page", async () => {
        document.body.innerHTML = `
            <div id='root'></div>
        `;

        await router();

        expect(
            getByTestId(document.body, "sign-in-form-title")
        ).toHaveTextContent("Veuillez vous connecter");
    });

    it("should render the Sensors Home Page", async () => {
        document.body.innerHTML = `
            <div id="root"></div>
        `;

        document.location = "/#/home";
        await router();

        expect(
            getByTestId(document.body, "home-sensors-title")
        ).toHaveTextContent("Vos capteurs");
    });

    it("should render the Sensor Page", async () => {
        document.body.innerHTML = `
            <div id="root"></div>
        `;

        document.location = "/#/facade-details";
        await router();

        expect(
            getByTestId(document.body, "sensor-detail-title")
        ).toHaveTextContent("Détails du capteur");
    });

    it("should render the Add Sensor Page", async () => {
        document.body.innerHTML = `
            <div id="root"></div>
        `;

        document.location = "/#/add-sensor";
        await router();

        expect(
            getByTestId(document.body, "add-sensor-title")
        ).toHaveTextContent("Ajout d'un nouveau capteur");
    });
});
