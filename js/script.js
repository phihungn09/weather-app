var searchh = document.querySelector(".search-bar");
var searchBtn = document.querySelector(".btn");
var city = document.querySelector(".city");
var tempp = document.querySelector(".temp");
var momo = document.querySelector(".momo");
var descriptionn = document.querySelector(".description");
var humidityy = document.querySelector(".humidity");
var windd = document.querySelector(".wind");

var weather = {
  "apiKey": "70209f6e10aa5cc58ec0422b4fde63d4",
  fetchWeather: function(city){
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid=" 
      + this.apiKey
    )
    .then((response) => response.json())
    .then(data => this.displayWeather(data));
  },
  displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;  
        console.log(name, icon, description, temp, humidity, speed);
        city.innerText = "Weather in " + name;
        momo.src = "http://openweathermap.org/img/wn/"+ icon + ".png"
        tempp.innerText = temp +"°C";
        humidityy.innerText = "Humidity: " + humidity + "%";
        windd.innerText = "Wind speed: " + speed + "km/h";
        descriptionn.innerText = description;
        document.querySelector(".card__weather").classList.remove("loading");
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
      },
    search: function() {
      this.fetchWeather(document.querySelector(".search-bar").value);
    }  
};
document
    .querySelector(".btn")  
    .addEventListener("click", function () {
      weather.search();
});
searchh.addEventListener('keypress', function (e) {
  if(e.code === 'Enter'){
    weather.search();
  }
})
weather.fetchWeather("Ha Noi");