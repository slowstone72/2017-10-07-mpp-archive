/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

function getNames() {
nameDataBase = {};
var _counter_2 = -1;
INTERVALID = setInterval(function() {
_counter_2++;
name = system_1[_counter_2].getOwnParticipant().name;
nameDatabase[_counter_2] = {name};
if(_counter_2==Object.keys().length) {clearInterval(INTERVALID);console.log('Complete.');MainClient_send('Complete.');}
}, 100);
}

function setupProxyFishingMode() { 
var _counter_ = -1;
SPFM = setInterval(function() { 
_counter_++;
eval("system_1["+_counter_+"].on('a', function(msg) {if(msg.a.includes(nameDatabase["+_counter_+"]+' caught')||msg.a.includes(nameDatabase["+_counter_+"]+' is getting a bite')) {system.sendArray([{m:'a', message: data}]);}});");
}, 500);
}


system_1[_counter_].on("a", function(msg) {
if(msg.a.includes(nameDatabase[_counter_]+' caught')||msg.a.includes(nameDatabase[_counter_]+' is getting a bite')) {system.sendArray([{m:"a", message: data}]);}});