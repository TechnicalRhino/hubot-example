var api_key = 'ba7b8b6b7d3a9f027da4440ae7ce9f2f';


module.exports = function (jarvis) {
  jarvis.hear(/weather of (\w+)/i, function (jar_resp) {
    var city_name = jar_resp.match[1];
    var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(city_name, "&appid=", api_key, "&units=metric");

    jarvis.http(url).get()(function (err, res, body) {
      jar_resp.send("The average temparature of " + city_name + " at this moment is " + JSON.parse(body).main.temp + "°C");
    });
  });
};

