const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () =>
{mainnav.classList.toggle("responsive")}, false);





const thedate = new Date();
if (thedate.getDay() != 5) {
    document.querySelector(".banner").innerHTML = "&#129374Pancake day on Fridays only!!";
  }
  const date = new Date();
  document.querySelector("#theyear").innerHTML = date.getFullYear();


  //const datefield =
 // document.querySelector("date");
  //const now = new Date();
 // const fulldate = new
 // Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
 // datefield.textContent= fulldate;