const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c26e3dcc0d770cf7dbb8501a10abd5b9/${lat},${lng}`,
        json: true, 
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to DarkSky servers.')
        } else if (response.statusCode === 400){
            callback('Unable to fetch weather.')
        } else if (response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports.getWeather = getWeather;