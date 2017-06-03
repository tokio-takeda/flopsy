var HueApi = require("node-hue-api").HueApi;
var bridge = require("../../../main/resources/bridge");

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var api;

api = new HueApi(bridge.ip, bridge.username);

// --------------------------
// Using a promise
api.config().then(displayResult).done();
// using getConfig() alias
api.getConfig().then(displayResult).done();

// --------------------------
// Using a callback
api.config(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
// using getConfig() alias
api.getConfig(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
