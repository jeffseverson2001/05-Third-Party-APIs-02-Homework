//  Declair elements
//let currentDate = document.getElementById('currentDay');
let currentDate = $('#currentDay');
let timeBlock = $('#timeblock');
let rowText = document.querySelector("#row-text");

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
    hours: ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","10PM"]
}

console.log(displayHours.hours.length);




//  Store Event in Local Storage
function saveEvent(scheduleEvents) {
    scheduleEvents.preventDefault();

    var scheduleText = $('input[id="row-text"]').val();

    localStorage.setItem("events", JSON.stringify(scheduleText));
}




//  Get event from local storage for hour line





//  Build line for each hour with event and save button
function buildLines() {

    for(let i=0; i < displayHours.hours.length; i++){
        //let inputRow = $('input[name="shopping-input"]').val();

        let baseRow = document.createElement("form");
        baseRow.setAttribute("class", "row");
        baseRow.setAttribute("id", "row-text");

//  Time Block
        let hourRow = document.createElement("span");
        hourRow.setAttribute("class", "time-block");
        hourRow.textContent = displayHours.hours[i];

        let hourBlock = DateTime.now().toFormat('ha');
        console.log("Luxon Date: " + hourBlock);

        let displayHoursBlock = displayHours.hours[i];
        console.log("Local Date: " + displayHoursBlock);

        let addToBute = "";
        if (displayHoursBlock === hourBlock) {
            addToBute = "present";
        //} else if (displayHours.hours[i] > hourBlock) {
        } else if (displayHoursBlock > hourBlock) {
            addToBute = "future";
        } else {
            addToBute = "past";
        }

        console.log("Display Hours: " + displayHours.hours[i]);
        console.log("Add To Bute: " + addToBute);

//  Schedule Note
        let textArea = document.createElement("textarea");
        textArea.setAttribute("class", "textarea " + addToBute);
        textArea.setAttribute("value", "sText" + displayHours.hours[i]);
        
//  This is the save button
        let saveIcon = document.createElement("i");
        saveIcon.setAttribute("class", "fas fa-save fa-2x");

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "saveBtn");
        
        saveButton.append(saveIcon);
        //saveButton.setAttribute("value", "text"displayHours.hours[i]););

        baseRow.appendChild(hourRow);
        baseRow.appendChild(textArea);
        baseRow.appendChild(saveButton);

        timeBlock.append(baseRow);
        //saveButton.on('submit', saveEvent(textArea));
    }
    
}

//  Add Event Listners

buildLines();
