const cityid = "5604473";
const APPID = "36e656b2905c89b5bb9203c9be1b4077";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temperature = document.querySelector("#temp");
    temperature.textContent = jsObject.main.temp;
    const currently = document.querySelector("#current");
    currently.textContent = jsObject.weather.description;
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
    const windspeed = document.querySelector("#wind");
    windspeed.textContent = jsObject.wind.speed;
    // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  });
