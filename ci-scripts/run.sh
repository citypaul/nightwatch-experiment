#!/usr/bin/env bash
npm cache clean
npm install

node ci-scripts/generate-browserstack-json.js
node_modules/nightwatch/bin/nightwatch tests/*.js -c browserstack.json
rm ../browserstack.json