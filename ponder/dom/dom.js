const title = document.querySelector("h1");

console.log(title);

title.textContent = 'Web Page Components';

// document.querySelector('#topics').style.color = 'red'; 
// let topics = document.querySelector('#topics')
// topics.style.color = 'red';
document.getElementById('topics').style.color = 'purple';

let list = document.querySelector('.list');
list.style.border = '3px solid black';

let para = document.querySelector('p');
// para.style.backgroundColor = "lightblue";
para.classList.add('background')

// document.querySelector(body).classList.add('background')

const image = document.querySelector('img');
image.setAttribute('src', 'images/web.png')

// Drop down
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
});

const dropdown = document.getElementById("webdevlist");

dropdown.addEventListener("change", () => {
    const value = dropdown.value;

    document.getElementById("html-list").style.backgroundColor = "";
    document.getElementById("css-list").style.backgroundColor = "";
    document.getElementById("js-list").style.backgroundColor = "";

    if (value === "html") {
        document.getElementById("html-list").style.backgroundColor = "lightpink";
    } else if (value === "css") {
        document.getElementById("css-list").style.backgroundColor = "lightblue";
    } else if (value === "js") {
        document.getElementById("js-list").style.backgroundColor = "lightyellow";
    }
});
