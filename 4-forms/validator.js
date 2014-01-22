"using strict";

var Validator = {
    
    init: function () {
        
        // Formvariabler
        var form = document.getElementById("userform");
        var button = document.getElementById("sendButton");
        var question = document.getElementById("formQuestion");
        
        // Reguljära uttryck
        
        var regExpNames = /^\s*$/;
        var regExpEMail = /^(?!\.)(\w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/i;
        var regExpPostCode = /^(se\s?)?\d{3}[\s-]?\d{2}$/i;
        
        var focusField = form.elements.firstName;
        
        focusField.focus();
        
            // Olika variabler för fälten
           
            
            var mail = form.elements.eMail.value;
            
            var newDiv = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];  // Fyra divs
            
            for(var i = 0; i < newDiv.length; i+=1)
            {
                newDiv[i].setAttribute("id", "newDiv");         // Sätt alla divs ID
            }
            
            var text = [document.createTextNode("Fältet får inte lämnas tomt!"), document.createTextNode("Fältet får inte lämnas tomt!"), 
            document.createTextNode("Felaktigt format på postnummer!"), document.createTextNode("Felaktigt format på e-post!")];        // Skapa rätt text
            
            for(var y = 0; y < newDiv.length; y+=1)
            {
                newDiv[y].appendChild(text[y]);             // Lägg in text i div taggar          
            }
            
            var div = [document.getElementById("error1"), document.getElementById("error2"), document.getElementById("error3"), document.getElementById("error4")];
            // Existerande div taggar
            
            
        form.elements.firstName.onblur = function () {              // Text för förnamn
            var fname = form.elements.firstName.value;
            
            if(fname.match(regExpNames))
            {
                div[0].appendChild(newDiv[0]);
                div[0].style.display = "block";
            }
            
            else
            {  
                div[0].value = "";
                div[0].style.display = "none";
            }
        };
        
        form.elements.lastName.onblur = function () {               // Text för efternamn
            var lname = form.elements.lastName.value;
            
            if(lname.match(regExpNames))
            {
                div[1].appendChild(newDiv[1]);
                div[1].style.display = "block";
            }
            
            else
            {
               div[1].style.display = "none";
            }
        };
        
        form.elements.postCode.onblur = function () {           // Text för postnummer
            var code = form.elements.postCode.value;
            var textArea = document.getElementById("codeText");
            
            if(!code.match(regExpPostCode))
            {
                div[2].appendChild(newDiv[2]);
                div[2].style.display = "block";
            }
            
            else
            {
                var newPostCode = code.replace("-", "");
                newPostCode = newPostCode.toLowerCase();
                newPostCode = newPostCode.replace(" ", "");
                newPostCode = newPostCode.replace("s", "");
                newPostCode = newPostCode.replace("e", "");
                div[2].style.display = "none";
                textArea.value = newPostCode;
            }
        };
        
        form.elements.eMail.onblur = function () {              // Text för e-mail
            var email = form.elements.eMail.value;
            
            if(!email.match(regExpEMail))
            {
                div[3].appendChild(newDiv[3]);
                div[3].style.display = "block";
            }
            
            else
            {
                div[3].style.display = "none";
            }
        };
        
        
        
        button.onclick = function(e) {                          // Klick
            
            button.value = "Skickar...";
            
        };
        
    }
};

window.onload = Validator.init;