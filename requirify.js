var request = require('browser-request');

window.require = function(name, moduleName) {
    _require = require;

    if(!moduleName) {
        moduleName = name;
    }

    console.log('Fetching ' + moduleName + '... just one second');
    request('https://wzrd.in/standalone/' + moduleName + '@latest/', function(er, res, body) {

        require = null;
        eval(body);
        window[name] = require(moduleName);
        require = _require;
        console.log('Finished getting ' + moduleName);
    });
};
