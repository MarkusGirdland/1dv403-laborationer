"use strict";


var myApp = {

        
    
    init: function () {
        
        var messages = [];
        
        var myBtn = document.getElementById("send");
        
        myBtn.onclick = function(e){
            e.preventDefault();
           
           
            var now = new Date();
            var input = document.querySelector("#messageReceived");
            
            messages.push(new Message(input.value, now));
            
            renderMessages(messages, false);
        };
    }
    
};

function renderMessage(index, theMessages){
    var theMessage = theMessages[index];                            // Få rätt meddelande
    var text = document.createTextNode(theMessage.getText());
    var li = document.createElement('li');
    var ul = document.getElementById("writeMessages");
    ul.style.listStyleType="none";
    
    var button=document.createElement('a');
    
    li.id = index;                                                  // Spara id
    li.appendChild(text);                                           // Lägg in text & tid 
    li.appendChild(button);
    
    var timeImage = document.createElement('img');
    timeImage.src = 'img/clock.png';
    
    button.appendChild(timeImage);

    var image = document.createElement('img');                      // Lägg in bild
    image.src = 'img/deletePic.png';

    timeImage.onclick = function(){
        alert(theMessage.getDate());                                // Alert med tid
    };

    li.appendChild(image);                                          
    ul.appendChild(li);

    image.onclick = function(e){
        var message_id = this.parentNode.id;                        // Ta bort rätt arrayelement
        
        theMessages.splice(message_id, 1); 
        removeAll(theMessages); 
    };
}

var timesWritten = 0;

function renderMessages(theMessages, fromBeginning){
    
    if(fromBeginning)
    {
        for(var i = 0; i < timesWritten; i+=1)
        {
            renderMessage(i, theMessages);                      // Skriv ut utan att plussa
        }
    }
    
    else
    {
        renderMessage(timesWritten, theMessages);
        timesWritten+=1;                                        // Plussa endast om det är ett nytt meddelande
    }
}

function removeAll(theMessages){
    document.getElementById("writeMessages").innerHTML = '';    // Radera all html
    timesWritten-=1;                                            // Ta bort 1
    renderMessages(theMessages, true);
}

window.onload = myApp.init;





