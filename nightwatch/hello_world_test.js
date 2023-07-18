module.exports = {
    test: (client) => {
        client
            .url("https://duckduckgo.com/")
            .waitForElementVisible(".legacy-homepage_logo__DLUJg", 10 * 10000)
            .assert.visible("input[type=text]")
            .setValue("input[type=text]", "hello world")
            .assert.visible("button[type=submit]")
            .click("button[type=submit]")
            .waitForElementVisible(".results--main")
            .assert.visible("#r1-0");
    },
};
