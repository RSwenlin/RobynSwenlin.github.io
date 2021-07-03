const temp = parseFloat(document.querySelector("#temp").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);

let windChill =
  35.74 +
  0.6215 * temp -
  35.75 * Math.pow(wind, 0.16) +
  0.4275 * temp * Math.pow(wind, 0.16);

if (temp <= 50 && wind > 3) {
  windChill = Math.round(windchill);
} else {
  windChill = "N/A";
}
document.querySelector("#windchill").textContent = windChill;
