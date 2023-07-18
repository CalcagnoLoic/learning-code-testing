module.exports = {
    test: (client) => {
        client
            //user story 1 : connexion au site en complétant le formulaire
            .url("http://127.0.0.1:5500/")
            .waitForElementVisible(".main-title", 10 * 10000)
            .assert.visible("input[type=email]")
            .setValue("input[type=email]", "thomas@facadia.com")
            .assert.visible("input[type=password]")
            .setValue("input[type=password]", "azerty")
            .assert.visible("button[type=submit]")
            .click("button[type=submit]")

            //user story 2 : page des capteurs avec le titre
            .waitForElementVisible(".section-title", 10 * 10000)
            .assert.containsText(".section-title", "Vos capteurs")

            //user story 3 : page détaillée du capteur
            .assert.visible(".sensor-info-btn")
            .click(".sensor-info-btn")
            .waitForElementVisible(".section-title", 10 * 10000)
            .assert.visible(".section-title")
            .assert.containsText(".section-title", "Détails du capteur #7")

            .end();
    },
};
