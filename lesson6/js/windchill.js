

const temp =document.querySelector(".temp").innerHTML;
const wind =document.querySelector(".wind").innerHTML;

const windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * (Math.pow(wind, 0.16)))

if (temp <= 50 && wind > 3) {
    windchill = math.round(windchill);
}
else {
    windchill = "N/A";
}
document.querySelector("#windchill").textContent= windchill;
