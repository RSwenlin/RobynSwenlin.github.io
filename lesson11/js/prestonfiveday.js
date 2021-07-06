// const cityid = "5604473";
// const APPID = "36e656b2905c89b5bb9203c9be1b4077";

// const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     // console.log(jsObject);

//     let day = 1;
//     const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     // filter the list array for the five day forecasts
//     const fiveDayForecast = jsObject.list.filter((forecast) => forecast.dt_txt);
//     fiveDayForecast.forEach((x) => {
//       let d = new Date(x.dt_txt);
//       document.querySelector(`dayofweek${day + 1}`).textContent =
//         dayofWeek[d.getDay()];
//       document.querySelector(`forecast${day + 1}`).textContent = x.main.temp;
//       day++;
//     });
//   });
// const requestAPI =
//   "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=36e656b2905c89b5bb9203c9be1b4077";

// fetch(requestAPI)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     let day = 1;
//     const dayofweek = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     const fivedays = jsObject.list.filter((forecast) =>
//       forecast.dt_txt.includes("18:00:00")
//     );
//     console.log(fivedays);

//     fivedays.forEach((x) => {
//       let d = new Date(x.dt_txt);

//       document.getElementById("day" + day).textContent = dayofweek[d.getDay()];
//       document.getElementById("data" + day).textContent = x.main.temp + " °F";
//       document
//         .getElementById("day" + day + "image")
//         .setAttribute(
//           "src",
//           `https://openweathermap.org/img/w/${x.weather[0].icon}.png`
//         );
//       day++;
//     });
//   });
