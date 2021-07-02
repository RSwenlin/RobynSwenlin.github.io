const data = parseFloat(document.querySelector("#data").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);

let windChill =
  35.74 +
  0.6215 * data -
  35.75 * Math.pow(wind, 0.16) +
  0.4275 * data * Math.pow(wind, 0.16);

if (data <= 50 && wind > 3) {
  windChill = Math.round(windchill);
} else {
  windChill = "N/A";
}
document.querySelector("#windchill").textContent = windChill;
