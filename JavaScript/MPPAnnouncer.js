/* Ancient code published for archival purposes. May or may not work or be relevant.
Feel free to do whatever you want with this, if anything.
Archive from 2017-10-07 - contents may be older. */

MPP.chat.send('Announcer.exe has been launched.')   
MPP.chat.send('This script will count how many people leave and join, it will also welcome people to the room.')                                               
MPP.chat.send('Currect location info: ' + location + ' - ' + location.pathname + ' - ' + location.hostname )  
MPP.chat.send('It is now: ' + Date() + '.')                                             


counter1 = 0
counter2 = 0                                                                                                                        
setTimeout(function(){ counter1 = 0; }, 7000);
setTimeout(function(){ counter2 = 0 ; }, 7000);

MPP.client.on('participant added', (pp) => {
  MPP.chat.send('Welcome to room (' + MPP.client.channel._id + '), ' + pp.name + '.') })                                                                                      
MPP.client.on('participant removed', (pp) => {
  MPP.chat.send(pp.name + ' has left the room.') })                                                                                                               MPP.client.on('participant added', (pp) => {counter1 = counter1 + 1 })                                                                                      
MPP.client.on('participant removed', (pp) => {counter2 = counter2 + 1})          

                                                                                                     
setInterval(MPP.chat.send, 1000 * 60 * 15000, 'Since this script has been active: ' + counter1 + ' people have joined and ' + counter2 + ' people have left.');                                                                                                          