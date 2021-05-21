const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click', () => {
    if (fav.value != '' ){
        // create the element in the list
        let li = createElement('li');
        let deletebutton = document.createElement('button');
        // change some properties ... textcontent
        li.textContent = fav.value;
        deletebutton.textContent = '❌';
        // add the button to the li
        li.appendChild(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click', function()
        {
            output.removeChild(li);
            fav.focus;
        }
}
});