"use strict";

var myApp = {
    
    
    
    init: function () {
        var now = new Date();
        var messages = [];
        
        console.log("inne");
        
        messages[0] = new Message("Hej", now);
        messages[1] = new Message("Tja", now);
        
        messages.push(new Message("Görs?", now));
        
        window.alert(messages[0].toString());
        window.alert(messages[1].toString());
        window.alert(messages[2].toString());
            
        
    }
    
};

window.onload = myApp.init;


