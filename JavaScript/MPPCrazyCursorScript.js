/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */﻿

// ==UserScript==
// @name         MPP cursor socket script :P
// @namespace    http://www.multiplayerpiano.com/
// @version      0.1 
// @description  Fill the room with loads of crazy cursors XD
// @author       
// @match        http://www.multiplayerpiano.com/*
// @grant        none
// ==/UserScript==

//---------------------------------

//Paste the below script on the VPN's tab(s)

MPP.client.sendArray([{ m: "userset", set: { name: 'MPPCS #Loading' } }])  

setInterval(function(){ MPP.client.sendArray([{ m: "userset", set: { name: 'MPPCS #' + Math.random() } }])   }, 1000);

MPP.client.on('m', msg => {
    MPP.client.sendArray([{"m":"m","x":msg.x,"y":msg.y}]);
});

MPP.client.on('n', n=>{ if(n.n[0].n[0] == '\0'){ var s = ""; for(var x = 0; x < n.n.length; x++) s += n.n[x].n; MPP.chat.send(s); } });

//A js command for relocating room easily.
MPP.client.on("a",function(msg){if(msg.p.id==MPP.client.participantId&&0==msg.a.indexOf("/js"))try{MPP.chat.send("MPPCS: "+eval(msg.a.slice(4)))}catch(err){MPP.chat.send("Error: "+err)}})

//MPP.client.setChannel("lolwutsecretlobbybackdoor")

//setTimeout(function(){ MPP.client.setChannel("lolwutsecretlobbybackdoor"); }, 50000);



//Paste the below script on your main tab.



Name = '' //Your name goes here

MPP.client.sendArray([{ m: "userset", set: { name: 'MPPCS #1 - Host' + Name } }])  

//Customsend made by Ming!, or atleast he gave it to me, so i assume he made it.
MPP.customsend = function(m){ var arr = []; ('\0' + m).match(/.{1,5}/g).forEach((a)=>arr.push({n:a})); MPP.client.sendArray([{m: 'n', t: 0, n: arr}]); };
// MPP.customsend('Online');
MPP.customsend('Connected');

//And finally paste this on this your main tab to relocate all the bots to another room.
speechmarks = '"';
roomname = "lolwutsecretlobbybackdoor"; //Name of room that you want to relocate to goes here.
MPP.chat.send('Relocating bots to ' + roomname + '!')
message = "/js MPP.client.setChannel(" + speechmarks + roomname + speechmarks + ");"
MPP.customsend('' + message + '');
setTimeout(function(){ MPP.client.setChannel( roomname ); }, 3000);
setTimeout(function(){ MPP.customsend('System connected to room ' + roomname) }, 5000);
