function updateTemperature(response) {
  let city = document.querySelector("#updated-city");
  let searchedCityTemperature = document.querySelector(
    "#current-city-temperature-temp"
  );
  let searchedCityConditions = document.querySelector("#conditions");
  let searchedCityHumidity = document.querySelector("#humidity");
  let searchedCityWind = document.querySelector("#wind-speed");
  let currentTime = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#weather-icon");

  city.innerHTML = response.data.city;
  icon.innerHTML = `<img
              src="${response.data.condition.icon_url}"
              class="current-city-temperature-icon" />`;

  currentTime.innerHTML = formatDate(date);
  searchedCityTemperature.innerHTML = Math.round(
    response.data.temperature.current
  );
  searchedCityConditions.innerHTML = response.data.condition.description;
  searchedCityHumidity.innerHTML = response.data.temperature.humidity;
  searchedCityWind.innerHTML = response.data.wind.speed;

  console.log(response.data);
}

function formatDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "de2o6a7354a9ebbc12abf998t40de9e9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateTemperature);
}

function changeCityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let updatedCity = document.querySelector("#updated-city");

  searchCity(cityInput.value);
}

function displayForecast() {
  let forecast = document.querySelector("#forecast");
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
          <div class="forecast-date">${day}</div>
          <div class="forecast-icon">☀</div>
          <div class="forecast-temp">
            <div class="forecast-temperature"><strong>18°C</strong></div>
            <div class="forecast-temperature">9°C</div>
          </div>
        </div>`;
  });
  forecast.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("click", changeCityName);

searchCity("Narva");
displayForecast();
