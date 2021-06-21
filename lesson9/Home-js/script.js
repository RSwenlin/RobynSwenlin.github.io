

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
//   for (let i = 0; i < towns.length; i++ ) {
    let cards = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');

    h2.textContent = `${towns[i].name}`;
    img.setAttribute('src', `images/${sodasprings.jpg}`);




    cards.append(h2);
    cards.append(img);
    document.querySelector('div.cards').append(cards);
  }
);
const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

    // get the date of the last visit from local storage
    const lastVisit = localStorage.getItem("lastvisit") || Date.now();
    document.querySelector("#lastvisit").textContent = (lastVisit - Date.now()) / 864000;
    localStorage.setItem("lastvisit", Data.now());