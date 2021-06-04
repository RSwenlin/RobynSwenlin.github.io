// const hambutton = document.querySelector(".ham");
// const mainnav = document.querySelector(".navigation");

// hambutton.addEventListener("click", () =>
// {mainnav.classList.toggle("responsive")}, false);






  const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;


  //const datefield =
 // document.querySelector("date");
 // const fulldate = new
 // Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
 // datefield.textContent= fulldate;

 const now = new Date().getDay;
 if (day == 5) {
   document.querySelector("banner").innerHTML = "&#129374;Pancake day on Fridays only!!";
   
 }