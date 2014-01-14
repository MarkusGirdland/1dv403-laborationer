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
        
        
        /*var input = document.querySelector("#messageReceived");
        var submit = document.querySelector("#send");
        
        console.log(input);
        console.log(submit);
        
        submit.addEventListener("click", function(e) {
		e.preventDefault();
		
		messages.push(new Message(input.value, now));
		
		renderMessages(messages);

        });
        
        */
        
      
    }
    
};

var called = 0;
var id = 0;

function renderMessage(theMessage, theMessages){
    var text = document.createTextNode(theMessage.getText());
    var time = document.createTextNode(theMessage.getDate());
    var div = document.getElementById("writeMessages");
    
    div.appendChild(text);
    div.appendChild(time);
    
    // Id
    
    id = called;
    called+=1;
    
    // Bilden
    
    var image = document.createElement('img');
    image.src = 'img/deletePic.png';
    
    div.appendChild(image);
    div.appendChild(document.createElement('br'));
    
    image.onclick = function(e){
        
        
        theMessages.splice(div.id, 1);
        removeAll(theMessages);
    };
}

var timesWritten = 0;

function renderMessages(theMessages, fromBeginning){
    
    if(fromBeginning)
    {
        for(var i = 0; i < timesWritten; i+=1)
        {
            renderMessage(theMessages[i], theMessages);
        }
    }
    
    else
    {
        renderMessage(theMessages[timesWritten], theMessages);
        timesWritten+=1;
    }
    
    console.log(timesWritten);
}

function removeAll(theMessages){
    document.getElementById("writeMessages").innerHTML = '';
    renderMessages(theMessages, true);
}

window.onload = myApp.init;





