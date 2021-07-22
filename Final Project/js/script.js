const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

const directory = "json/final.json";

fetch(directory)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject);
    const business = jsonObject["business"];
    for (let i = 0; i < business.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      let p = document.createElement("p");
      let img = document.createElement("img");

      h2.textContent = `${business[i].name}`;

      h3.textContent = `${business[i].owner}`;

      h4.textContent = `${business[i].phone}`;

      p.textContent = `${business[i].address}`;

      img.setAttribute("src", business[i].imageurl);

      card.append(h2);
      card.append(h3);
      card.append(h4);
      card.append(p);
      card.append(img);

      document.querySelector("div.cards").append(card);
    }
  });
