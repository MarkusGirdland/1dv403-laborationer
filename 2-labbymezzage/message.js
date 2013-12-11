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

function renderMessage(Message){
    var text = document.createTextNode(Message.getText());
    
    var div = document.getElementById("writeMessages");
    
    writeMessages.appendChild(text);
    
    // Bilden
    
    var img = document.createElement("img");
    img.src = "img/deletePic.png";
    
    var link = document.createElement("a");                     // Från guide http://www.peterbe.com/plog/createelement-a
    link.setAttribute("TheLink", "signature");
    link.setAttribute('href', 'javascript:deleteIt()');
    
    var linkText = document.createTextNode("Ta bort");          // Skaffa text till länken
    
    link.appendChild(linkText);
    
    writeMessages.appendChild(link);                            // skriv ut text, länk och gör ny rad
    writeMessages.appendChild(img);
    
    div.innerHTML += "<br />";
}

var timesWritten = 0;

function renderMessages(messages) {
    
    timesWritten += 1;
    
    
    if(timesWritten === (messages.length))
    {
        renderMessage(messages[timesWritten-1]);
    }
}

function deleteIt(){
    console.log("toast");
}