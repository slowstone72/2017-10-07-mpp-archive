/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

//new Client("ws://ourworldofpixels.com:1234");

client1 = new Client("ws://mpp.meowbin.com:8080");
client1.start();
client1.setChannel('lobby');
client2 = new Client("ws://multiplayerpiano.com:8080");
client2.start();
client2.setChannel('lobby')
c1send = function(message) {client1.sendArray([{m:"a", message: message}]);}
c2send = function(message) {client2.sendArray([{m:"a", message: message}]);}

setInterval(function() {
client1.sendArray([{ m: "userset", set: { name: 'MPP Meowbin to MPP'} }]);
client2.sendArray([{ m: "userset", set: { name: 'MPP to MPP Meowbin'} }]);
}, 2000);

client1.on("a", function(msg) {
if(!msg.p._id==client1.getOwnParticipant()._id){
c2send(msg.p.name + ': ' + msg.a);
}
});

client2.on("a", function(msg) {
if(!msg.p._id==client2.getOwnParticipant()._id){
c1send(msg.p.name + ': ' + msg.a);
}
});


