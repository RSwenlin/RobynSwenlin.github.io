const images = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("date-src");
    };
};

const imgOptions = {

};

if ("IntersectionObserver" in window) {

const imgObserver = new IntersectionObserver(entries =>  {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImages(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });

}, imgOptions);

images.forEach((img) => {

}

}

const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

