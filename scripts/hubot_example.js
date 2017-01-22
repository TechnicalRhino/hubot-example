var http = require('request');
var api_key = '{{your_api_key}}';


module.exports = function (jarvis) {
  jarvis.hear(/[a-zA-Z ]*weather of (\w+)[a-zA-Z ]*[?]*/, function (jar_speech) {
    var city_name = jar_speech.match[1];
    console.log("city name ", city_name);
    var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(city_name, "&appid=", api_key, "&units=metric");
    http({
      uri: url,
      method: "GET",
      timeout: 50000
    }, function (error, response, body) {
      if (!error) {
        jar_speech.send("The avg temparature of ".concat(city_name, " is ", JSON.parse(body).main.temp, " deg c"));
      }
    });
  });
};

