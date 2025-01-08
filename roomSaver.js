/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

//RoomSaver 

clientWebsite = 'multiplayerpiano.com';
clientWebsitePort = '8080';
clientWebsocket = 'ws://' + clientWebsite + ':' + clientWebsitePort;
startroom = 'RP Room';
message = true;
roomOwner = '';
function start() {
roomOwner = MPP.client.channel.crown.userId;
rs = new Client(clientWebsocket);
rs.setChannel(startroom);
rs.start();
send = function(message) {rs.sendArray([{m:"a", message: message}]);}
setTimeout(function() {
send('Hello! I\'m RoomSaver. If the owner of this room disconnects for any reason, I will pick up the crown to prevent others from stealing it. Once the owner of the room is connected again, I will give the crown back to the owner.');
send('This bot was made to prevent rooms from being took over when the owner leaves the room.');
pickupcrown = setInterval(function() {rs.sendArray([{m: "chown", id: rs.getOwnParticipant().id}]);
if(rs.isOwner()) {if(message){send('room owner disconnected. picking up crown');message = false}}
}, 0);
setTimeout(function() {
rs.on("participant added", function(msg){ if(msg._id==roomOwner) {send('room owner connected. welcome back.');setTimeout(function() {send('giving crown back to ' + msg._id + '');clearInterval(pickupcrown);rs.sendArray([{m: "chown", id: roomOwner}]);pickupcrown = setInterval(function() {rs.sendArray([{m: "chown", id: rs.getOwnParticipant().id}]);
if(rs.isOwner()) {if(message){send('room owner disconnected. picking up crown');message = false}}
}, 0);message = true;}, 10000);} }) });

}, 3000);}
