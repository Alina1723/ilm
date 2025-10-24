function changeCityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let updatedCity = document.querySelector("#updated-city");
  updatedCity.innerHTML = cityInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);
