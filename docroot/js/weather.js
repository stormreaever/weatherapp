$(document).ready(function() {

  requestData();
  var requestTimer = setInterval(requestData, requestInterval);

});

function requestData() {
  var url = dataUrl;
  console.log('requesting data');

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        getData(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function getData(response) {
  var arr = JSON.parse(response);

  setVariables(arr);
}

function setVariables(data) {

  var pairs = {
    'location': data['name'],
    'description': data['weather'][0].description,
    'temperature': data['main'].temp,
    'humidity': data['main'].humidity,
    'wind_speed': data['wind'].speed
  };
  var icon = data['weather'][0].icon;

  for (var key in pairs) {
    var val = pairs[key];
    $('.' + key).text(val);
  }

console.log(icon);
  var iconSrc = ('/img/' + icon + '.png');
  $('.icon').attr('src', iconSrc);

  var d = new Date();
  var dateString = d.getFullYear() + '-' + d.getMonth()+1 + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  console.log(dateString + ' temp: ' + pairs['temperature'] + ' wind speed: ' + pairs['wind_speed']);
}
