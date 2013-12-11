"use strict";

var myApp = {
    
    
    
    init: function () {
        var now = new Date();
        var messages = [];
        
        console.log("inne");
        
        var input = document.querySelector("#messageReceived");
        var submit = document.querySelector("#send");
        submit.addEventListener("click", function(e) {
		e.preventDefault();
		
		messages.push(new Message(input.value, now));
		
		renderMessage(messages[0]);
		

        });
        
        
        
        
    }
    
};

window.onload = myApp.init;




