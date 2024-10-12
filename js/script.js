'use strict';

const box = document.getElementById('box'),
bnts = document.getElementsByTagName("button"),
circles = document.getElementsByClassName('circle'),
wrapper = document.querySelector('.wrapper'),
hearts = wrapper.querySelectorAll('.heart'),
oneHeart = wrapper.querySelector('.heart');


//box.style.backgroundColor = "blue";
//box.style.width = "500px";

box.style.cssText = `background-color: blue; width: 500px`

bnts[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//for(let i = 0; i < hearts.length; i++){
 //  hearts[i].style.backgroundColor = 'blue'
//}

//hearts.forEach( item =>{
//item.style.backgroundColor = 'black';
//});

const div = document.createElement('div');
//const text = document.createTextNode('идите нахуй все');
div.classList.add('black');

wrapper.append(div);
///////wrapper.appendChild(div);
//wrapper.prepend(div);
//hearts[1].before(div);
//hearts[0].after(div);
////////wrapper.insertBefore(div,hearts[1])
//circles[0].remove();
//wrapper.removeChild(hearts[1]);
hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);
//div.innerHTML = "я люблю ариночку♥";
//div.innerHTML = `<h1>hello world</h1>`;
//div.textContent = "чалов иди нахуйййй"; для записи данных от пользователя
//div.insertAdjacentHTML('af', `<h2>hello </h2>`);