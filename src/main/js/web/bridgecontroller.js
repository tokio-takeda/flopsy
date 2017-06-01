var HueApi = require("node-hue-api").HueApi;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.11.13",
    username = "X07BCO6AStgwehX2vrwwDFqt5oAU9MsuK5MuUoCj",
    api;

api = new HueApi(host, username);

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
