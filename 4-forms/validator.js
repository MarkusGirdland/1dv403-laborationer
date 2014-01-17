"using strict";

var Validator = {
    
    init: function () {
        
        // Formvariabler
        var form = document.getElementById("userform");
        var button = document.getElementById("sendButton");
        var question = document.getElementById("formQuestion");
        var div = '';
        var text = '';
        
        // Reguljära uttryck
        
        var regExpNames = /^\s*$/;
        var regExpEMail = /^(?!\.)(\w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/i;
        //var regExpPostCode = /
        
        
        
        var focusField = form.elements.firstName;
        
        focusField.focus();
        
            // Olika variabler för fälten
           
            var lname = form.elements.lastName.value;
            var code = form.elements.postCode.value;
            var mail = form.elements.eMail.value;
            
        form.elements.firstName.onblur = function () {
            var fname = form.elements.firstName.value;
            div = document.getElementById("error1");
            
            if(fname.match(regExpNames))
            {
                text = document.createTextNode("Fältet får inte lämnas tomt!");
                div.appendChild(text);
                div.style.color="red";
            }
            
            else
            {
                text = document.createTextNode("Ok!");
                div.appendChild(text);
                div.style.color="green";
                
            }
        };
        
        
        
        button.onclick = function(e) {                          // Klick
            button.disabled = true;
            button.value = "Skickar...";
            
            

            
            
            
            if(lname.match(regExpNames))
            {
                div = document.getElementById("error2");
                text = document.createTextNode("Fältet får inte lämnas tomt!");
                div.appendChild(text);
                div.style.color="red";
            }
            
            // TODO: Postnummer
            
            if(!mail.match(regExpEMail))
            {
                div = document.getElementById("error4");
                text = document.createTextNode("Felaktigt format på e-mail!");
                div.appendChild(text);
                div.style.color="red";
            }
            
            
            
            
        };
        
    }
};

window.onload = Validator.init;