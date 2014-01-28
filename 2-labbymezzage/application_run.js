"use strict";

var myApp = {

        
    
    init: function () {
        
        var messages = [];
        
        var myBtn = document.getElementById("send");
        var enter = document.querySelector("#messageReceived");
        
        enter.addEventListener("keydown", keyDown, false);
        
        
        function keyDown(e){
            if(e.keyCode == 13 && e.shiftKey)
            {
                e.preventDefault();
                var input = document.querySelector("#messageReceived");
                
                input.value = input.value + "\n";
            }
            
            else if(e.keyCode == 13) { 
                e.preventDefault();
                var now = new Date();
                var theInput = document.querySelector("#messageReceived");
                
                messages.push(new Message(theInput.value, now));
                
                renderMessages(messages, false);
            }
        }
        
        // e.shiftKey && 
        
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
    var text = document.createTextNode(theMessage.getHTMLText());
    var li = document.createElement('li');
    var ul = document.getElementById("writeMessages");
    ul.style.listStyleType="none";
    
    
    var a = document.createElement('a');
    a.href = "#";
    
    var button=document.createElement('a');
    button.href="#";
    
    li.id = index;                                                  // Spara id
    //li.appendChild(text);                                           // Lägg in text & tid 
    li.innerHTML = theMessage.getHTMLText();
    li.appendChild(button);
    
    var image = document.createElement('img');                      // Lägg in bilder
    image.src = 'img/deletePic.png';
    
    var timeImage = document.createElement('img');
    timeImage.src = 'img/clock.png';
    
    
    
    button.appendChild(timeImage);
    a.appendChild(image);

    
    button.onclick = function(){
        alert(theMessage.getDate());                                // Alert med tid
    };
    
    li.appendChild(a);
    ul.appendChild(li);

    a.onclick = function(e){
        var message_id = this.parentNode.id;   // Ta bort rätt arrayelement

        var sure = confirm("Är du säker på att du vill ta bort meddelandet?");
        
        if(sure)
        {
            theMessages.splice(message_id, 1); 
            removeAll(theMessages); 
        }
        
        else
        {
        }
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





