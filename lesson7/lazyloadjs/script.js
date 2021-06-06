const images = document.querySelectorAll("[data-src]");

const imgOptions = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) =>  {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {

        }
    })

}, imgOptions);



const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

