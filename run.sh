#!/usr/bin/env bash
set -e
node generate-nightwatch-config.js
node_modules/eslint/bin/eslint.js tests config
node_modules/nightwatch/bin/nightwatch tests/*.js -c nightwatch.json --retries 5 --env chrome
