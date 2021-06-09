const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

const imagesToLoad = document.querySelectorAll("img[gallery-images]");


if ("IntersectionObserver" in window) {