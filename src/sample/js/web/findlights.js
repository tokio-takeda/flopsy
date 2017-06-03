var HueApi = require("node-hue-api").HueApi;
var bridge = require("../../../main/resources/bridge");

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var api = new HueApi(bridge.ip, bridge.username);

// --------------------------
// Using a promise
api.lights()
    .then(displayResult)
    .done();

// --------------------------
// Using a callback
api.lights(function(err, lights) {
    if (err) throw err;
    displayResult(lights);
});
