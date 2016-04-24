var _ = require('lodash');
var config = {
    dev: 'dev',
    int: 'int',
    test: 'test',
    live: 'live',
    browserstack: {
        user: process.env.BROWSERSTACK_USER,
        key: process.env.BROWSERSTACK_KEY,
        workers: parseInt(process.env.NUMBER_OF_WORKERS),
        liveOutput: process.env.LIVE_OUTPUT === "true"
    }
};
var envConfig;

process.env.ENV = process.env.ENV || config.dev;
config.env = process.env.ENV;

envConfig = require('./' + config.env);

module.exports = _.merge(config, envConfig);
