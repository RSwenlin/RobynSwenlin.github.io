const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');

        
        h2.textContent = `${prophets[i].name}  ${prophets[i].lastname}`;  

        h3.textContent = `${prophets[i].birthdate}`;

        p.textContent = `${prophets[i].birthplace}`;
        
        img.setAttribute('src', prophets[i].imageurl);

        card.append(h2);
        card.append(h3);
        card.append(p);
        card.append(img);

        document.querySelector('div.cards').append(card);
    }
  });





