/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

//The MultiplayerPiano.com Super Fast Messaging System


clientWebsite = 'multiplayerpiano.com';
clientWebsitePort = '8080';
clientWebsocket = 'ws://' + clientWebsite + ':' + clientWebsitePort;

prefix = '/';
rooms = [];
clients = {};
clientsconnected = false;

MPP.client.on("ls",function(ls){
if(!clientsconnected)
for(var room in ls.u){
rooms.push(ls.u[room]._id);
uniqueNames = [];
$.each(rooms, function(i, el){
    if($.inArray(el, rooms2) === -1) rooms2.push(el);
});

};
});

//MPP.chat.send('[The MultiplayerPiano.com Super Fast Messaging System]');
//MPP.chat.send('The current prefix: ' + prefix + '. Use ' + prefix + 'help for the system\'s command list.');
rooms2 = [];
function connectClients() {
i = -1;
test = setInterval(function() {
i++;
clients[i] = new Client(clientWebsocket);
clients[i].start();
clients[i].setChannel(rooms2[i]);
clients[i].on("a", function(msg) { if(msg.a.toLowerCase()==prefix+'help') {clients[i].sendArray([{m:"a", message: 'test' }]);} });
if(i==rooms2.length) {clearInterval(test);console.log('Clients Connected'); }
}, 500);}

function sendmessage(recipient,msg,sender) {
for (var i = 0; i < Object.keys(clients).length; i++) {
if(Object.values(clients[i].ppl).map(x => x._id)

.includes(recipient)){
clients[i].sendArray([{m:"a", message: 'Notification: ' + JSON.stringify(clients[i].ppl).split(recipient)[1].split('"color"')[0].split('","name":')[1]

 + ' you have received a message from test' }]);
clients[i].sendArray([{m:"a", message: '"' + msg + '"' }]);
}
else 
{

}
}
} 
