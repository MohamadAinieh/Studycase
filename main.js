var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var weather = JSON.parse(this.responseText);
    document.getElementById("city").innerHTML = weather.today.city;
    document.getElementById("state").innerHTML = weather.today.state;
    document.getElementById("iconLink").innerHTML = weather.today.iconLink;
    document.getElementById("temperature").innerHTML = weather.today.temperature;
    document.getElementById("highTemperature").innerHTML = weather.today.highTemperature;
    document.getElementById("lowTemperature").innerHTML = weather.today.lowTemperature;
    document.getElementById("description").innerHTML = weather.today.description;
  }
};
xmlhttp.open("GET", "https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather", true);
xmlhttp.send();