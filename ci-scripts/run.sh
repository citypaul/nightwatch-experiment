#!/usr/bin/env bash
node ci-scripts/generate-browserstack-json.js
node_modules/nightwatch/bin/nightwatch tests/*.js -c nightwatch.json
