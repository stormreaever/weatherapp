/***
    App Config
              ***/

// Request interval: time between API calls in milliseconds
var requestInterval = 900000; // 15 minutes
// var requestInterval = 1000;

// API key
var apiKey = '6f1054c3f9c834efaa1dc9c635c780e3';

// City ID
var cityId = '6167865'; // Toronto

// Units
var units = 'metric';

// url for API call or data location
var dataUrl = 'http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=' + units + '&appid=' + apiKey;
//var dataUrl = 'test/data_current.json'; // test data
