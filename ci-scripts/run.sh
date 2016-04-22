#!/usr/bin/env bash
node_modules/nightwatch/bin/nightwatch tests/*.js -c nightwatch.json --retries 5 --env chrome
