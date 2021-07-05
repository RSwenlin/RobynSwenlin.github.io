const cityid = "5607916";
const APPID = "36e656b2905c89b5bb9203c9be1b4077";

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // filter the list array for the five day forecasts
    const fiveDayForecast = jsObject.list.filter((forecast) => forecast.dt_txt);
    fiveDayForecast.forEach((x) => {
      let d = new Date(x.dt_txt);
      document.querySelector(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.querySelector(`forecast${day + 1}`).textContent = x.main.temp;
      day++;
    });
  });
