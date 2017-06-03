var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var bridge = require("../../../main/resources/bridge");

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var api = new HueApi(bridge.ip, bridge.username),
    state;

// Set light state to 'on' with warm white value of 500 and brightness set to 100%
state = lightState.create().on().white(500, 100);

// --------------------------
// Using a promise
api.setLightState(2, state)
    .then(displayResult)
    .done();
