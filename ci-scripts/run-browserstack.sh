#!/usr/bin/env bash
node ci-scripts/generate-browserstack-json.js
node_modules/nightwatch/bin/nightwatch tests/*.js -c browserstack.json --retries $RETRIES

#store exit code from tests
success=$?

rm browserstack.json
exit ${success}