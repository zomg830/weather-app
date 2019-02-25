const request = require('request');
const config = require('../config');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${config.weatherAPI}/${lat},${lng}`,
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