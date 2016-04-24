#!/usr/bin/env bash
set -e
node_modules/eslint/bin/eslint.js tests
node_modules/nightwatch/bin/nightwatch tests/*.js -c nightwatch.json --retries 5 --env chrome
