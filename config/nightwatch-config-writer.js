var jsonfile = require('jsonfile'),
    appRoot = require('app-root-path');

module.exports = function(fileName, config) {
    jsonfile.writeFile(appRoot + '/' + fileName + '.json', config, function() {});
};

