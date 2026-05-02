const PI = 3.14; 
let radius = 3;

let area = radius * radius * PI; 
console.log(area);

radius = 20;
area = radius * radius * PI;
console.log(area);

// type coersion
const one = 1;
const two = '2';
                    
let result = one * two; 
console.log(result);

result = one + Number(two);
console.log(result);

//Scope
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);
    console.log(student);
}
console.log(course);

// Drop down
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
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
