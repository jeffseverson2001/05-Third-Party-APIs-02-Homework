//  Declair elements
//let currentDate = document.getElementById('currentDay');
let currentDate = $('#currentDay');
let timeBlock = $('#timeblock');


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

console.log(displayHours.hours.length);




//  Store Event in Local Storage
function saveEvent(messageText) {

}




//  Get event from local storage for hour line





//  Build line for each hour with event and save button
function buildLines() {

    for(let i=0; i < displayHours.hours.length; i++){
        //let inputRow = $('input[name="shopping-input"]').val();

        let baseRow = document.createElement("div");
        baseRow.setAttribute("class", "row");

        let hourRow = document.createElement("span");
        hourRow.setAttribute("class", "time-block");
        hourRow.textContent = displayHours.hours[i];

        let hourBlock = DateTime.now().toFormat('ha');
        console.log(hourBlock);

        let addToBute = "";
        if (displayHours.hours[i] === hourBlock) {
            addToBute = "present";
        } else if (displayHours.hours[i] > hourBlock) {
            addToBute = "future";
        } else {
            addToBute = "past";
        }

        console.log(addToBute);

        let textArea = document.createElement("textarea");
        textArea.setAttribute("class", "textarea " + addToBute);
        textArea.setAttribute("value", "sText" + displayHours.hours[i]);
        

        let saveIcon = document.createElement("i");
        saveIcon.setAttribute("class", "fas fa-save fa-2x");

        //<i class="fas fa-save"></i>

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "saveBtn");
        
        saveButton.append(saveIcon);
        //saveButton.setAttribute("value", "text"displayHours.hours[i]););

        baseRow.appendChild(hourRow);
        baseRow.appendChild(textArea);
        baseRow.appendChild(saveButton);

        timeBlock.append(baseRow);
        //timeBlock.appendChild(textArea); 
       //timeBlock.appendChild(saveEvent(row));
    }
    
}

//  Add Event Listners

buildLines();
