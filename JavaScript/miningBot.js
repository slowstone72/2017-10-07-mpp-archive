/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

//Mining Bot
BOTNAME = '[MINING]';

setInterval(function() {
BOTNAME = '[MINING]';
MPP.client.sendArray([{ m: "userset", set: { name: '< ' + BOTNAME + ' >' } }]);
setTimeout(function() {
MPP.client.sendArray([{ m: "userset", set: { name: '> ' + BOTNAME + ' <' } }]);
}, 1000);
setTimeout(function() {
BOTNAME = '[/HELP]';
}, 4000);
setTimeout(function() {
BOTNAME = '[INSERT CREDITS TO PLAY]';
}, 5000);
}, 5000);

MPP.client.on("a", function(msg) {});
function saveObject(object) {
localStorage.setItem(object, JSON.stringify(object));
}

function loadObject(object) {
retrievedObject = localStorage.getItem(object);
console.log('retrievedObject: ', JSON.parse(retrievedObject));
}
