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
// if it is friday then turn  the aside display to block
if (date.getDay(5) == 5) {
  document.querySelector("aside").style.display = "block";
}

const cityid = "5604473";
const APPID = "36e656b2905c89b5bb9203c9be1b4077";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temperature = document.querySelector("#temp");
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector("#current");
    currently.textContent = jsObject.main.feels_like.toFixed(0);
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
    const windspeed = document.querySelector("#wind");
    windspeed.textContent = jsObject.wind.speed.toFixed(0);
    // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  });
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const town = towns.filter((x) => x.name == "Preston");

    town.forEach((x) => {
      let card = document.createElement("section");

      let p = document.createElement("p");

      p.innerHTML = `Upcoming Events ${x.events}`;

      div.append(p);

      document.querySelector("dev.cards").append(card);
    });
  });
