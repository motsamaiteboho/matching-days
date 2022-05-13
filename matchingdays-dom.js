const firstDate = document.getElementById("first");
const secondDate = document.getElementById("second");
const Elements = document.querySelectorAll(".day");

const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let day1 = "";
let day2 = "";

function fillFirstDate(){

    const d = new Date(firstDate.value);
    let day = weekdays[d.getDay()];
    day1 = day;
    changeColor(day1,day2);
}
firstDate.addEventListener('change',fillFirstDate)

function fillSecondDate(){
    const d = new Date(secondDate.value);
    let day = weekdays[d.getDay()];
    day2 = day;
    changeColor(day1,day2);
}
secondDate.addEventListener('change',fillSecondDate)

function changeColor(day1,day2) {
    for(let i = 0; i < Elements.length; i++){
        Elements[i].classList.remove("color1")
        Elements[i].classList.remove("color2")
        Elements[i].classList.remove("color3")
    }

    for(let i = 0; i < Elements.length; i++){
        let item = Elements[i].innerHTML;
        let newitem = item.toLocaleLowerCase().trim() 

        if(newitem === day1){
            Elements[i].classList.add("color1");
        }

        if (newitem=== day2) {
            Elements[i].classList.add("color2");
        }
        if (newitem === day1 && newitem == day2) {
            Elements[i].classList.add("color3");
            break;
        }
    }
}