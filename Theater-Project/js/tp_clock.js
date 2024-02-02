"use strict";

/* All By Joshua Butrum */

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* Calculate the days until the fourth Saturday of February */
    var countDownDate = new Date("Feb 24, 2024 6:00:00 PM").getTime();

    /* Calculate the hours left in the current day */
    var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

    /* Calculate the minutes and seconds left in the current hour */
    var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
    var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

    /* Display the time left until the main attraction "Holographic Pop-Idol" takes place */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}