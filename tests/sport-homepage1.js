module.exports = {
    before: function (browser) {
        browser.url('http://www.bbc.co.uk/sport')
            .resizeWindow(1000, 800);
    },

    'Morph live scores': function (browser) {
        browser.waitForElementVisible('.primary-nav', 1000)
            .waitForElementVisible('button.sp-c-filter-nav__button', 1000)
            .pause(1000)
            .assert.elementPresent('#morph-live-scores')
            .assert.containsText('#morph-live-scores', 'Football Scores')

    },

    'Headlines': function (browser) {
        browser.assert.elementPresent('.anfield');
    },

    'Audio & Video': function(browser) {
        browser.assert.elementPresent('#audio-video')
            .assert.containsText('#audio-video', 'Audio & Video')
            .end();
    }
};