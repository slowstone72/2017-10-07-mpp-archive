/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

﻿setTimeout(function(){ window.alert("Starting EpicOS AI.."); }, 2000);
setTimeout(function(){ document.write("Hi, "); }, 5000);
setTimeout(function(){ document.write("im EpicOS AI."); }, 7000);
website = "https://www.youtube.com/"
MPP.chat.send('Are you sure you want to redirect to ' + website + '?');

setTimeout(function(){ var r = confirm("Would you like to go to the selected website?");
if (r == true) {
    window.location = website;
} else {
    document.write("Canceled by user.");;
}
 }, 9000);


setTimeout(function(){ var r = confirm("Would you like to go to the selected website?");
if (r == true) {
    MPP.chat.send('Redirecting to ' + website);
} else {
    MPP.chat.send('Canceled by user.');
}
 }, 9000);
