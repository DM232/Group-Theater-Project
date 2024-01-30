"use strict"

/* All was done by Nolan Bell */

/* sets the date */
var thisDay = new Date(Tuesday, January 30)

document.getElementById("calendar").innerHTML = createCalendar(thisDay)

/* Function to generate the calendar table */
function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}

function calCaption(calDate) {
    /* This is the list of months in order for our calendar */
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
    /* Tells us the current month */
    var thisMonth = calDate.getMonth();
 
    /* Tells us the current year */
    var thisYear = calDate.getFullYear();