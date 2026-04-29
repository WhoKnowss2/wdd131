let selectElem = document.querySelector('#themeSelect');
let logo = document.querySelector('.logo img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        document.body.classList.add('dark');        // light text for dark background
        logo.src = "images/byui-logo-white.png";    // white logo for dark background
    } else {
        document.body.classList.remove('dark');     // original colored text for light background
        logo.src = "images/byui-logo-blue.webp";    // original logo for light background
    }
}
