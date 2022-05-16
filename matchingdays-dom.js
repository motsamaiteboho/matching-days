const firstDate = document.getElementById("first");
const secondDate = document.getElementById("second");

var matchingDays = MatchingDays();

function fillFirstDate() {
    matchingDays.setDay1Name(firstDate.value)
    changeColor();
}
firstDate.addEventListener('change', fillFirstDate)

function fillSecondDate() {
    matchingDays.setDay2Name(secondDate.value)
    changeColor();
}
secondDate.addEventListener('change', fillSecondDate)

document.addEventListener('DOMContentLoaded', function () {
    changeColor();
});

function changeColor() {

    let day1 = matchingDays.getDay1Name();
    let day2 = matchingDays.getDay2Name();

    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    let weekdays = matchingDays.getWeekDays();
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