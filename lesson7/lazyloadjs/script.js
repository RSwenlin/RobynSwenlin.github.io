const images = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {

};

const imgOptions = {

};

if ("IntersectionObserver" in window) {

const imgObserver = new IntersectionObserver((entries, imgObserver) =>  {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {

        }
    })

}, imgOptions);

images.forEach

}

const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

