//  Declair elements
let currentDate = document.getElementById('currentDay');


let DateTime = luxon.DateTime;

const dt = DateTime.fromISO(new Date().toISOString());
console.log(dt.toFormat('yyyy/MM/dd'));
const dt2 = DateTime.fromJSDate(new Date());
console.log(dt2.toFormat('yyyy/MM/dd'));



//  Get current date and time

let DateTime = luxon.DateTime;
let jDate = DateTime;


//let now = "This is now";
//DateTime.now();
//let dt = DateTime.local(2017, 5, 15, 8, 30);

//console.log(now);

//let jDate = toLocaleString(DateTime.now());
//let jDate = DateTime.local();
//let jDate = "J Date";

//jDate.innerHTML = "This is the current Date";
//currentDate.append(jDate);


//answerButton.innerHTML = now;
//document.body.appendChild(currentDate);




//  Start hours from 9am to 5pm

//  Store Event in Local Storage

//  Get event from local storage for hour line

//  Build line for each hour with event and save button
