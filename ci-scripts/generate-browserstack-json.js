var appRoot = require('app-root-path');
var config = require(appRoot + '/config');

var json = {
    "src_folders": [
        "tests"
    ],
    "test_workers": {
        "enabled": true,
        "workers": config.nightwatch.workers
    },
    "live_output": config.browserstack.liveOutput,
    "output_folder": "reports",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "",
    "globals_path": "",
    "selenium": {
        "start_process": false,
        "host": "hub.browserstack.com",
        "port": 80
    },
    "test_settings": {
        "default": {
            "launch_url": "http://hub.browserstack.com",
            "selenium_port": 80,
            "selenium_host": "hub.browserstack.com",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": ""
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "browserstack.user": config.browserstack.user,
                "browserstack.key": config.browserstack.key,
                "browserstack.local": true
            }
        }
    }
};

require(appRoot + '/config/nightwatch-config-writer')('browserstack', json);

