function MatchingDays() {

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day1 = "";
    let day2 = "";
    
    function getDay1Name(){ 
        return day1;
    }

    function getDay2Name(){ 
        return day2;
    }

    function getWeekDays(){
        return weekdays;
    }

    function setDay1Name(firstDate){
        const d = new Date(firstDate);
        day1 = weekdays[d.getDay()];
    }

    function setDay2Name(secondDate){
        const d = new Date(secondDate);
        day2 = weekdays[d.getDay()];
    }

    return{
        getDay1Name,
        getDay2Name,
        getWeekDays,
        setDay1Name,
        setDay2Name
    }
}