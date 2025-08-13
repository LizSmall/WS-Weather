function refreshWeather(response) {
  // console.log(response.data);
  // console.log(response.data.temperature.current);
 let temperatureElement = document.querySelector("#temperature");
  // temperatureElement.innerHTML = response.data.temperature.current;
 let temperature = response.data.temperature.current; 
 let cityElement = document.querySelector("#city");
  // console.log(response.data.condition.description);

 cityElement.innerHTML = response.data.city;
 temperatureElement.innerHTML = Math.round(temperature);
 }


function searchCity(city) {
  let apiKey = "31be6t3394f370982af3d7o35730974f";
  let apiUrl = 
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  // console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Washington");
