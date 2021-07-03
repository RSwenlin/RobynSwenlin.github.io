const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

const cityid = "5604473";
const APPID = "36e656b2905c89b5bb9203c9be1b4077";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temperature = document.querySelector("#temp");
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector("#current");
    currently.textContent = jsObject.weather.description;
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
    const windspeed = document.querySelector("#wind");
    windspeed.textContent = jsObject.wind.speed.toFixed(0);
    // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  });
