/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

echonotes = false;
rotation = false;
window.document.styleSheets[0].insertRule('.bubble {  position: relative;  padding: 15px;  margin: 1em 0 3em;  color: #f3f3f3;  border-radius: 10px;  background: linear-gradient(#4c9cce, #196abb); text-shadow: 5px 5px 10px #0a2540;}', window.document.styleSheets[0].cssRules.length);
$("body").append('<div class="bubble" id="cp" style="position: absolute; bottom: 20px; right: 10px; z-index: 999;"><div class="" style="position: fixed; right: 25px; font-size: 9px;">[Control Pannel by Epictree160]</div><div class="" style="font-size: 20px; text-align: center;">Control Pannel</div><div id="buttons"><button id="shutdown">Shutdown</button><button id="togglerotation">Toggle Cursor Rotation</button><button id="ccp">Close the Control Pannel</button></div></div>');
$('#shutdown').on('click', function() {
$('#cp').fadeOut();
localMsg('System',green,'All main features disabled.');
clickLinks = false;
clearInterval(background);
clearInterval(names);
});

$('#togglerotation').on('click', function() {
if(rotation) {
rotation = false;
clearInterval(circlefollow);
} else {
rotation = true;
clearInterval(mouse);
startRotation();
}});

$('#ccp').on('click', function() {
$('#cp').fadeOut();
});

E.client.on('n', (msg) => { 
if(echonotes) {
for (var i = 0; i < msg.n.length; i++) {
var u=msg.n[i];
E.press(u.n, 0.3); }}}); 
