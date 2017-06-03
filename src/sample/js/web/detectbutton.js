//warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press
var dash_button = require('node-dash-button');
var dash = dash_button("34:d2:70:4b:a3:1b", null, null, 'all'); //address from step above
dash.on("detected", function (){
	console.log("omg found");
});
