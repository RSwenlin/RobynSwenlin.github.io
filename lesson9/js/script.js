const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const town = towns.filter(
      (x) =>
        x.name == "Preston" ||
        x.name == "Soda Springs" ||
        x.name == "Fish Haven"
    );

    town.forEach((x) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let img = document.createElement("img");
      let p = document.createElement("p");

      h2.innerHTML = `${x.name} <br> Town Motto "${x.motto}"`;

      p.innerHTML = `The town was founded in ${x.yearFounded}. <br> The current population is ${x.currentPopulation}. <br> The average rainfall is ${x.averageRainfall} in.`;
      img.setAttribute("src", `images/${x.photo}`);

      card.append(h2);
      card.append(img);
      card.append(p);

      document.querySelector("div.cards").append(card);
    });
  });

const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;
