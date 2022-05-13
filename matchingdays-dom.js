const firstDate = document.getElementById("first");
const secondDate = document.getElementById("second");
const Elements = document.querySelectorAll(".day");

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day1 = "";
let day2 = "";

function fillFirstDate() {

    const d = new Date(firstDate.value);
    let day = weekdays[d.getDay()];
    day1 = day;
    changeColor(day1, day2);
}
firstDate.addEventListener('change', fillFirstDate)

function fillSecondDate() {
    const d = new Date(secondDate.value);
    let day = weekdays[d.getDay()];
    day2 = day;
    changeColor(day1, day2);
}
secondDate.addEventListener('change', fillSecondDate)

document.addEventListener('DOMContentLoaded', function () {
    changeColor(day1, day2);
});
function changeColor(day1, day2) {

    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");
    var userData = {
        days: weekdays
    };

    // compile the template
    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;

    const colDay1 = document.getElementById(day1);
    const colDay2 = document.getElementById(day2);

    if(day1 !== day2) {
        if(day1 !== "")
            colDay1.classList.add("color1");
        if(day2 !== "")
            colDay2.classList.add("color2");
    }else{
        if(day1 !== "")
            colDay1.classList.add('color3');
    }
}