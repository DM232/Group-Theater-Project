"use strict";

/* All was done by Nolan Bell */

/* Set the date displayed in the calendar*/
var thisDay = new Date();

/*Write the calender to the element with the id "calendar" */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/* Function to generate the calendar table */
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

/* Function to write the calendar caption*/
function calCaption(calDate) {
   /* Array of months in order */
   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   /* Where the month goes */
   var thisMonth = calDate.getMonth();

   /* Where the Year goes */
   var thisYear = calDate.getFullYear();

   /* Where the caption goes */
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

/* Function to write a table row of weekday abbreviations */
function calWeekdayRow() {
   /* Array of weeks in order */
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   /* Looks through the day name arrays */
   for (var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>"
   }

   rowHTML += "</tr>";
   return rowHTML
}

   /* Function to calculate the number of days in the month */
   function daysInMonth(calDate) {
   
   /* Array of the days for each month */
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

   /* Extract hte four digit year and month value */
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   /* Revise the days in February for leap years */
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
      dayCount[1] = 29;
   }
}

   /* The number of days for current month */
   return dayCount[thisMonth];

}

/*Function to write table rows for each day of the month */
function calDays(calDate) {
   /* Determines the starting day in the month */
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

   /* Write blank cells providing the starting day */
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }

   /* cells for each day of the month */
   var totalDays = daysInMonth(calDate);
   
   var highlightDay = calDate.getDate();
   for (var i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay === 0) htmlCode += "<tr>";
      if(i === highlightDay) {
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
      } else {
      htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
      }
      if (weekDay === 6) htmlCode += "</tr>";
   }

   return htmlCode;
}