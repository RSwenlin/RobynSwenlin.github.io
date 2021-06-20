const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

    // get the date of the last visit from local storage
    const lastVisit = localStorage.getItem("lastvisit") || Date.now();
    document.querySelector("#lastvisit").textContent = (lastVisit - Date.now()) / 864000;
    localStorage.setItem("lastvisit", Data.now());

    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject)
  const towns = jsonObject['towns'];
  for (let i = 0; i < towns.length; i++ ) {
    let card = document.createElement('section');






    document.querySelector('div.cards').append(card);
  }
});
