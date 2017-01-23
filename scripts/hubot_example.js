var api_key = '7aca6998bd5fe53seabcb868a82e6d168';


module.exports = function (jarvis) {
  jarvis.hear(/weather of (\w+)/i, function (jar_resp) {
    var city_name = jar_resp.match[1];
    var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(city_name, "&appid=", api_key, "&units=metric");
    jarvis.http(url).get()(function (err, res, body) {
      jar_resp.send("The average temparature of " + city_name + " at this moment is " + JSON.parse(body).main.temp + "°C");
    });
  });
};

