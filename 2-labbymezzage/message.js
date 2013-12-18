"use strict";

function Message(text, date) {
    
    this.getText = function () { return text; };
    this.setText = function (_text) { _text = text || " "; };
    
    this.getDate = function () { return date; };
    this.setDate = function (_date) { _date = date || 0; };
    
    
    console.log(this.toString());
    
    this.setText(text);
    this.setDate(date);
}

Message.prototype.toString = function () {
    return "This message is: "+this.getText()+" <END>. And was written "+this.getDate();
};

Message.prototype.getHTMLText = function () {
    return "INSERT HTML TEXT HERE";
};

function renderMessage(Message, messages){
    var text = document.createTextNode(Message.getText());
    var time = document.createTextNode(Message.getDate());
    var div = document.getElementById("writeMessages");
    
    writeMessages.appendChild(text);
    div.innerHTML += " ";
    writeMessages.appendChild(time);
    
    // Bilden
    

    
    var btn = document.createElement("BUTTON");                   
    
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Execute");
    btn.setAttribute("id", "TheLink");
    
    btn.onClick="deleteIt(messages)";
    
    
    var img = document.createElement("img");
    img.src = "img/deletePic.png";
    
    
    btn.appendChild(img);
    btn.onClick= deleteIt(messages);
    
    
    writeMessages.appendChild(btn);                            // skriv ut text, länk och gör ny rad
    
    div.innerHTML += "<br />";
}

var timesWritten = 0;

function renderMessages(messages) {
    
        timesWritten += 1;
    
    
    if(timesWritten === (messages.length))
    {
        renderMessage(messages[timesWritten-1], messages);
    }
}

    function deleteIt(messages)
    {
        console.log("hej Igen");
      timesWritten -= 1;
      messages.pop();
      renderMessages(messages);
    }

