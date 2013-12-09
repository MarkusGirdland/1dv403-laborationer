var myApp = {
    
    init: function () {
        var now = new Date();
        var myMessage = new Message("Nej, men hallå där. Köp blåbär!", now);
        window.alert(myMessage.toString());
    }

};


window.onload = myApp.init;