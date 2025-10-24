function updateTemperature(response) {
  console.log(response.data.temperature.current);
  let searchedCityTemperature = document.querySelector(
    "#current-city-temperature-temp"
  );
  searchedCityTemperature.innerHTML = Math.round(
    response.data.temperature.current
  );
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
  updatedCity.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);
