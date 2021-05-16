//  Declare elements
let currentDate = $('#currentDay');
let timeBlock = $('#timeblock');
let rowText = $("#row-text");



//  Get current date and time
let DateTime = luxon.DateTime;
let jDate = DateTime.now().toFormat('EEEE, MMMM');
let weekDate = DateTime.now().toFormat('d');

function dateSuffix(weekDate){
    let num1 = weekDate % 10;
    let num2 = weekDate % 100;
    if (num1 == 1 && num2 != 11) {
        return weekDate + "st";
    }
    if (num1 == 2 && num2 != 12) {
        return weekDate + "nd";
    }
    if (num1 == 3 && num2 != 13) {
        return weekDate + "rd";
    }
    return weekDate + "th";
}

let dateDay = dateSuffix(weekDate);
currentDate.append(jDate, " ", dateDay);



//  Start hours from 9am to 5pm
let displayHours = {
    hours: ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
}



//  Store Event in Local Storage
function saveEvent(event) {
    event.preventDefault();

    let sText9AM = document.querySelector("#sText9AM");
    let sText10AM = document.querySelector("#sText10AM");
    let sText11AM = document.querySelector("#sText11AM");
    let sText12PM = document.querySelector("#sText12PM");
    let sText1PM = document.querySelector("#sText1PM");
    let sText2PM = document.querySelector("#sText2PM");
    let sText3PM = document.querySelector("#sText3PM");
    let sText4PM = document.querySelector("#sText4PM");
    let sText5PM = document.querySelector("#sText5PM");

    //let scheduleText = $('textarea[id="sTExt9AM"]').val();
    let scheduleText = {
        sText9AM: sText9AM.value.trim(),
        sText10AM: sText10AM.value.trim(),
        sText11AM: sText11AM.value.trim(),
        sText12PM: sText12PM.value.trim(),
        sText1PM: sText1PM.value.trim(),
        sText2PM: sText2PM.value.trim(),
        sText3PM: sText3PM.value.trim(),
        sText4PM: sText4PM.value.trim(),
        sText5PM: sText5PM.value.trim()
    }

    console.log(scheduleText);
    localStorage.setItem("scheduleText", JSON.stringify(scheduleText));
}



//  Get event from local storage for hour line
function getEventItems() {
    let scheduleEvents = localStorage.getItem("scheduleText");
    return JSON.parse(scheduleEvents);
}



//  Build line for each hour with event and save button
let storedEvents = getEventItems();
function buildLines() {

    for(let i=0; i < displayHours.hours.length; i++){

        let baseRow = document.createElement("div");
        baseRow.setAttribute("class", "row");
        baseRow.setAttribute("id", "row-text");
        baseRow.setAttribute("name", "sText" + displayHours.hours[i]);

        //  Time Block
        let hourRow = document.createElement("span");
        hourRow.setAttribute("class", "time-block");
        hourRow.textContent = displayHours.hours[i];

        let hourBlock = DateTime.now().toFormat('ha');

        let displayHoursBlock = displayHours.hours[i];

        let addToBute = "";
        if (displayHoursBlock === hourBlock) {
            addToBute = "present";
        } else if (displayHoursBlock > hourBlock) {
            addToBute = "future";
        } else {
            addToBute = "past";
        }

        //  Schedule Event Text
        let textArea = document.createElement("textarea");
        textArea.setAttribute("class", "textarea " + addToBute);
        textArea.setAttribute("id", "sText" + displayHours.hours[i]);
        if (storedEvents) {
            if (displayHours.hours[i] === "9AM") {
                textArea.innerText = storedEvents.sText9AM;
            } else if (displayHours.hours[i] === "10AM") {
                textArea.innerText = storedEvents.sText10AM;
            } else if (displayHours.hours[i] === "11AM") {
                textArea.innerText = storedEvents.sText11AM;
            } else if (displayHours.hours[i] === "12PM") {
                textArea.innerText = storedEvents.sText12PM;
            } else if (displayHours.hours[i] === "1PM") {
                textArea.innerText = storedEvents.sText1PM;
            } else if (displayHours.hours[i] === "2PM") {
                textArea.innerText = storedEvents.sText2PM;
            } else if (displayHours.hours[i] === "3PM") {
                textArea.innerText = storedEvents.sText3PM;
            } else if (displayHours.hours[i] === "4PM") {
                textArea.innerText = storedEvents.sText4PM;
            } else if (displayHours.hours[i] === "5PM") {
                textArea.innerText = storedEvents.sText5PM;
            }
        }

        //  This is the save button
        let saveIcon = document.createElement("i");
        saveIcon.setAttribute("class", "fas fa-save fa-2x");

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "saveBtn");
        saveButton.append(saveIcon);

        //  Add Elements to Base Element
        baseRow.append(hourRow);
        baseRow.append(textArea);
        baseRow.append(saveButton);

        timeBlock.append(baseRow);
    }

}



//  Add Event Listners
timeBlock.on('click', '.saveBtn', saveEvent);

buildLines();
