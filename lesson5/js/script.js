const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () =>
{mainnav.classList.toggle("responsive")}, false);

const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();

const datefield =
document.querySelector("date");
const now = new Date();
const fulldate = new
Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent= fulldate;