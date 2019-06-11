'use strict'

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage['films']) {
        arr = JSON.parse(localStorage['films']);
    }
    filmsRating();
    console.log(arr);
}, true);


let main = document.getElementById("main");
let field = document.getElementById("field");

let inputText = document.createElement('input');
inputText.type = 'text';
inputText.name = 'text';
let button = document.createElement('button');
button.innerHTML = 'Add';
button.addEventListener('click', setFilm);

function setFilm() {
    console.log(inputText.value);
    let name = inputText.value.toString()
    arr.push([name, 0]);
    main.innerHTML = '';
    inputText.value = '';
    filmsRating ();
    localStorage['films'] = JSON.stringify(arr);
}

field.appendChild(inputText);
field.appendChild(button);

let arr = [['The Godfather (1972)', 0],
            ['The Dark Knight (2008)', 0],
            ['12 Angry Man (1957)', 0],
            ['Schindler\'s List (1993)', 0]
            ];

function filmsRating () {
    arr.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    arr.sort((a, b) => {
        return b[1] - a[1];
    });

    arr.forEach((elem) => {
        let div = document.createElement('div');
        div.className = 'film-rating';
        div.addEventListener('click', getAction);
        let span = document.createElement('span');
        let ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating';
        for (let i = 0; i < 5; i++ ) {
            let div = document.createElement('div');
            div.setAttribute('data-star', i+1);
            div.className = 'star';
            console.log(elem[0]);
            if (i < elem[1]){
                div.className = div.className + ' red';
            }
            ratingDiv.appendChild(div);
        }
        span.innerHTML = elem[0];
        div.appendChild(span);
        div.appendChild(ratingDiv);
        main.appendChild(div);
    });

    let rating = document.querySelectorAll('.rating');

    function getAction(EO) {
        rating.forEach((elem, i) => {
            if (elem === EO.target.parentNode) {
                console.log(arr[i][1]);
                let num = EO.target.getAttribute('data-star');
                arr[i][1] = num;
                main.innerHTML = '';
                filmsRating();
                localStorage['films'] = JSON.stringify(arr);
            }
        });
    }

};

