module.exports = {
    'Demo test Google': function(browser) {
        var wait = 1000;
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', wait)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', wait)
            .click('button[name=btnG]')
            .pause(wait)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};
