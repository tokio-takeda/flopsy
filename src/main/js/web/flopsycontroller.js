var dash_button = require('node-dash-button');
var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;
var bridge = require("../../../main/resources/bridge");

var dash = dash_button("34:d2:70:4b:a3:1b", null, null, 'all');

var api = new HueApi(bridge.ip, bridge.username),
    state = lightState.create();

var displayResult = function(result) {
    console.log(result);
};

var displayError = function(err) {
    console.error(err);
};

dash.on("detected", function (){
    api.lightStatus(2)
        .then(function(result){
            displayResult(result);

            if(result.state.on) {
                api.setLightState(2, state.off())
                    .then(displayResult)
                    .fail(displayError)
                    .done();
            } else {
                api.setLightState(2, state.on())
                	.then(displayResult)
                    .fail(displayError)
                    .done();
            }
        })
        .fail(displayError)
        .done();
});
