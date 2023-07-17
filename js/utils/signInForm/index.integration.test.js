/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { getByLabelText, getByRole, getByTestId } from "@testing-library/dom";
import SignIn from "../../pages/signIn/index";
import { handleSignInForm } from ".";

//A executer avec les tests d'intégrations
beforeEach(() => {
    document.body.innerHTML = SignIn.render();
    handleSignInForm();
});

//A executer après les tests d'intégrations
afterEach(() => {
    document.body.innerHTML = "";
});

describe("signInForm Integration Test Suites", () => {
    it("should display an error message when the email is not correct", () => {
        //j'écris dans un input l'adresse mail
        userEvent.type(
            getByLabelText(document.body, "Votre addresse e-mail"),
            "thomas@thomas.com"
        );

        //je clique sur le bouton pour envoyer le formulaire
        userEvent.click(getByRole(document.body, "button"));

        expect(
            getByTestId(document.body, "user-email-error-msg")
        ).not.toHaveClass("hidden");
    });

    it("should display an error message for the password's field if we submit the form without the password", () => {
        userEvent.type(
            getByLabelText(document.body, "Votre addresse e-mail"),
            "thomas@facadia.com"
        );

        userEvent.click(getByRole(document.body, "button"));

        expect(getByTestId(document.body, "user-email-error-msg")).toHaveClass(
            "hidden"
        );

        expect(
            getByTestId(document.body, "user-password-error-msg")
        ).not.toHaveClass("hidden");
    });

    it("should render an error message for the wrong password", () => {
        userEvent.type(
            getByLabelText(document.body, "Votre addresse e-mail"),
            "thomas@facadia.com"
        );

        userEvent.type(
            getByLabelText(document.body, "Votre mot de passe"),
            "x"
        );

        userEvent.click(getByRole(document.body, "button"));

        expect(
            getByTestId(document.body, "user-password-error-msg")
        ).not.toHaveClass("hidden");
    });

    it("should render not error message", () => {
        userEvent.type(
            getByLabelText(document.body, "Votre addresse e-mail"),
            "thomas@facadia.com"
        );

        userEvent.type(
            getByLabelText(document.body, "Votre mot de passe"),
            "azerty"
        );

        userEvent.click(getByRole(document.body, "button"));

        expect(
            getByTestId(document.body, "user-password-error-msg")
        ).toHaveClass("hidden");
        expect(getByTestId(document.body, "user-email-error-msg")).toHaveClass(
            "hidden"
        );
    });
});
