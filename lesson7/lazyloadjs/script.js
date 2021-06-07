const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("date-src");
    };
};

const imgOptions = {
    rootMargin: "0px 0px 25px 0px",
    threshold: 1

};

if ("IntersectionObserver" in window) {

const imgObserver = new IntersectionObserver(items =>  {
    items.forEach(item => {
        if (item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });

}, imgOptions);

imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});

} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
}

const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

