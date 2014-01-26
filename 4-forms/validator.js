"using strict";

var Validator = {
    
    init: function () {
        
        // Formvariabler
        var form = document.getElementById("userform");
        var button = document.getElementById("sendButton");
        
        // Reguljära uttryck
        
        var regExpNames = /^\s*$/;
        var regExpEMail = /^(?!\.)(\w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/i;
        var regExpPostCode = /^(se\s?)?\d{3}[\s-]?\d{2}$/i;
        
        var focusField = form.elements.firstName;
        
        focusField.focus();
        
            // Olika variabler för fälten
           
            var filled = [false, false, false, false];
            
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
                filled[0] = true;
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
                filled[1] = true;
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
                filled[2] = true;
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
                filled[3] = true;
            }
        };
        
        var divContainer;

        button.onclick = function(e) {
            
            button.disabled = true;
            
              if(filled[0] && filled[1] && filled[2] && filled[3])
                {
                    divContainer = popupBackground();
                    
                    popup(divContainer, form, button);
                }
                
                else
                {
                    button.disabled = false;
                    return false;
                }
        };
        
        
    }
};

function popup(backgroundDiv, theForm, theButton) {
    var popForm = document.getElementById("userform");
    var myDiv = document.createElement("div");
    myDiv.className = "popupWindow";
    var priceModel = document.getElementById("priceModel");
    
    // Knappar
    
    var newButton = document.createElement("button");
    var newerButton = document.createElement("button");
    
    newButton.setAttribute("value", "Skicka");
    
    newButton.innerHTML = "Skicka";
    newerButton.innerHTML = "Stäng";
    
    newButton.className = "popupButton";
    newerButton.className = "popupButton";
    
    newButton.setAttribute("id", "Skicka");
    newerButton.setAttribute("id", "Avbryt");
    
    myDiv.appendChild(newButton);
    myDiv.appendChild(newerButton);
    
    // Information
    
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "popuph1");
    var h1Text = document.createTextNode("Vänligen kontrollera dina uppgifter");
    
    // Hämta de olika frågorna
    
    var fq1 = document.getElementById("formQuestion1");
    var fq2 = document.getElementById("formQuestion2");
    var fq3 = document.getElementById("formQuestion3");
    var fq4 = document.getElementById("formQuestion4");
    var fq5 = document.getElementsByTagName('label')[0].firstChild.data;
    
    // Lägg in texten av frågan + värdet av den i en variabel
    
    var writeFname = fq1.firstChild.nodeValue + ": " + popForm.elements.firstName.value;
    var writeLname = fq2.firstChild.nodeValue + ": " + popForm.elements.lastName.value;
    var writeCode = fq3.firstChild.nodeValue + ": " + popForm.elements.postCode.value;
    var writeMail = fq4.firstChild.nodeValue + ": " + popForm.elements.eMail.value;
    var writePlan = fq5 + ": " + priceModel.value; 
    
    // Skapa textnoder med variablerna
    
    var p1 = document.createTextNode(writeFname);
    var p2 = document.createTextNode(writeLname);
    var p3 = document.createTextNode(writeCode);
    var p4 = document.createTextNode(writeMail);
    var p5 = document.createTextNode(writePlan);
    
    h1.appendChild(h1Text);
    
    // Lägg in textnoderna i diven
    
    myDiv.appendChild(h1);
    myDiv.appendChild(p1);
    myDiv.appendChild(document.createElement('br'));
    myDiv.appendChild(p2);
    myDiv.appendChild(document.createElement('br'));
    myDiv.appendChild(p3);
    myDiv.appendChild(document.createElement('br'));
    myDiv.appendChild(p4);
    myDiv.appendChild(document.createElement('br'));
    myDiv.appendChild(p5);
    
    // Lägg in diven i modalfönstret
    
    document.body.appendChild(myDiv);
    
    newButton.onclick = function () {
        theButton.disabled = false;
        
        theForm.submit();
    };
    
    newerButton.onclick = function () {
        document.body.removeChild(myDiv);
        document.body.removeChild(backgroundDiv);
        theButton.disabled = false;
    };
}

function popupBackground() {
    var backgroundDiv = document.createElement("div");
    backgroundDiv.className = "popupBackground";
    document.body.appendChild(backgroundDiv);
    return backgroundDiv;
}


window.onload = Validator.init;