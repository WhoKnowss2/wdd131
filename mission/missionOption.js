let selectElem = document.querySelector('#themeSelect');
let logo = document.querySelector('.logo img');
let content = document.querySelector('#content');
let heading1 = document.querySelector('h1');
let subtitle = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        document.body.style.backgroundColor = "black";
        content.style.backgroundColor = "black";
        content.style.color = "white";
        heading1.style.color = "white";
        subtitle.style.color = "#4da3ff"; // accessible blue with good contrast
        logo.src = "images/byui-logo-white.png";
    } else {
        document.body.style.backgroundColor = "white";
        content.style.backgroundColor = "white";
        content.style.color = "black";
        heading1.style.color = "black";
        subtitle.style.color = "#0057b8"; // original BYUI blue
        logo.src = "images/byui-logo-blue.webp";
    }
}
