#!/usr/bin/env bash
set -e

node_modules/eslint/bin/eslint.js tests

curl -O https://s3-eu-west-1.amazonaws.com/live-sport-jenkins-master-infr-s3bucket-9evb9cmf37pg/BrowserStackLocal-linux-x64-3.8.zip
unzip -o BrowserStackLocal-linux-x64-3.8.zip

./BrowserStackLocal $BROWSERSTACK_KEY -forcelocal >/dev/null 2>&1 &


node ci-scripts/generate-browserstack-json.js
node_modules/nightwatch/bin/nightwatch tests/*.js -c browserstack.json --retries $RETRIES

#store exit code from tests
success=$?

rm browserstack.json
exit ${success}
