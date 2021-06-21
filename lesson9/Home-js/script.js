

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
        .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const town = towns.filter(x => x.name == 'Preston'
   || x.name == 'Soda Springs' || x.name == 'Fish Haven');

town.forEach(towns => {
for (let i = 0; i < towns.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p = document.createElement('p')

    h2.textContent = `${town[i].name} + ${town[i].motto}`;
    p.textContent = `${town[i].yearFounded} ${town[i].currentPopulation} 
    ${town[i].averageRainfall}`;
    img.setAttribute('src', `images/${town}`);




    card.append(h2);
    card.append(img);
    card.append(p);
    document.querySelector('div.cards').append(card);
  }
});

const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

    // get the date of the last visit from local storage
    const lastVisit = localStorage.getItem("lastvisit") || Date.now();
    document.querySelector("#lastvisit").textContent = (lastVisit - Date.now()) / 864000;
    localStorage.setItem("lastvisit", Data.now());