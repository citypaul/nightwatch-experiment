module.exports = {
    'Test homepage' : function (browser) {
        browser
            .url('http://www.bbc.co.uk/sport')
            .resizeWindow(1000, 800)
            .waitForElementVisible('.primary-nav', 1000)
            .waitForElementVisible('button.sp-c-filter-nav__button', 1000)
            .click('button.sp-c-filter-nav__button')
            .pause(1000)
            .assert.elementPresent('#morph-live-scores')
            .assert.containsText('#morph-live-scores', 'Football Scores')
            .end();
    }
};