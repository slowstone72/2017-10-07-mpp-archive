/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

name = "";

﻿MPP.client.sendArray([{ m: "userset", set: { name: name } }]);
MPP.chat.send('All messages are now being logged.');

MPP.client.on("a", function(msg) { localStorage.messages = localStorage.messages + ' _ ' + msg.p.name + ':' + msg.a + ''; setTimeout(function() { MPP.client.sendArray([{ m: "userset", set: { name: name+' [Saving message]'  } }]); }, 1000); setTimeout(function(){ MPP.client.sendArray([{ m: "userset", set: { name: name  } }]); }, 3000);  });

setTimeout(function() { MPP.client.sendArray([{ m: "userset", set: { name: name+' [Saving message]'  } }]); }, 1000); setTimeout(function(){ MPP.client.sendArray([{ m: "userset", set: { name: name  } }]); }, 3000);