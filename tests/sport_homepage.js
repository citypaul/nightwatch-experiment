module.exports = {
    before: function(browser) {
        var width = 1000;
        var height = 800;
        browser.url('http://www.bbc.co.uk/sport')
            .resizeWindow(width, height);
    },

    'Morph live scores': function(browser) {
        var wait = 1000;
        browser.waitForElementVisible('.primary-nav', wait)
            .waitForElementVisible('button.sp-c-filter-nav__button', wait)
            .pause(wait)
            .assert.elementPresent('#morph-live-scores')
            .assert.containsText('#morph-live-scores', 'Football Scores');

    },

    'Headlines': function(browser) {
        browser.assert.elementPresent('.anfield');
    },

    'Audio & Video': function(browser) {
        browser.assert.elementPresent('#audio-video')
            .assert.containsText('#audio-video', 'Audio & Video')
            .end();
    }
};
