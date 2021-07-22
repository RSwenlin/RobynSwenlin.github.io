const lat = "34.1808";
const lon = "118.3090";
const appid = "33e867d44f20ee9ebcd8bae51547bc91";

const appiUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units={imperial}&appid={appid}";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temperature = document.querySelector("#temp");
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector("#current");
    currently.textContent = jsObject.main.feels_like.toFixed(0);
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
    // const windspeed = document.querySelector("#wind");
    // windspeed.textContent = jsObject.wind.speed.toFixed(0);
    // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  });
