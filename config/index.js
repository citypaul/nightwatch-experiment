var _ = require('lodash');
var config = {
    dev: 'dev',
    int: 'int',
    test: 'test',
    live: 'live',
    nightwatch: {
        workers: parseInt(process.env.NUMBER_OF_WORKERS) || "auto"
    },
    browserstack: {
        user: process.env.BROWSERSTACK_USER,
        key: process.env.BROWSERSTACK_KEY,
        liveOutput: process.env.LIVE_OUTPUT === "true"
    }
};
var envConfig;

process.env.ENV = process.env.ENV || config.dev;
config.env = process.env.ENV;

envConfig = require('./environments/' + config.env);

module.exports = _.merge(config, envConfig);
