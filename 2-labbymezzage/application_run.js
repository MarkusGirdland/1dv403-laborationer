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
            
            renderMessages(messages);
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

function renderMessage(theMessage){
    var text = document.createTextNode(theMessage.getText());
    var time = document.createTextNode(theMessage.getDate());
    var div = document.getElementById("writeMessages");
    
    div.appendChild(text);
    div.innerHTML += " ";
    div.appendChild(time);
    
    // Bilden
    

    
    var btn = document.createElement('a');
    
    btn.onclick = function(){
        alert("click");
    };
    
    
    var img = document.createElement('img');
    img.src = 'img/deletePic.png';
    
    btn.appendChild(img);                     
    
    div.appendChild(btn);
    
    div.innerHTML += "<br />";
    

}

var timesWritten = 0;

function renderMessages(theMessages){
    
   /* var test = document.getElementById("writeMessages");
    if(theMessages.length > 1)
    {
        for(var y = 0; y < theMessages.length-1; y+=1)
        {
            test.removeChild(test.childNodes[y]);
        }
    } */
    
    

    renderMessage(theMessages[timesWritten]);

    timesWritten+=1;
}


window.onload = myApp.init;





