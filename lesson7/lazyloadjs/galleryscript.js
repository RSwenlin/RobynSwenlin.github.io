const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

const imagesToLoad = document.querySelectorAll("img[gallery-images]");


if ("IntersectionObserver" in window) {

    // get the date of the last visit from local storage
    const lastVisit = localStorage.getItem("lastvisit") || Date.now();
    document.querySelector("#lastvisit").textContent = (lastVisit - Date.now()) / 864000;
    localStorage.setItem("lastvisit", Data.now());