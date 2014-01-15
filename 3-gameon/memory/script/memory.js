"use strict";

var Memory = {
    
    init: function () {
        
        
        // VARIABLER FÖR STORLEK AV SPEL
        var rows = 4;
        var cols = 3;
        // ÄNDRA SOM DU VILL
        
        
        var randomArray = [];
        randomArray = window.RandomGenerator.getPictureArray(rows,cols);
        
        generateBoard(rows, cols, randomArray);
    }
};

function generateBoard(cols, rows, numberArray)
{
    var div = document.getElementById("tbody");
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var text = document.createTextNode("hej");
    
    var counter = 0;
    
    var imageArray = [];
    
    for(var x = 0; x < numberArray.length; x+=1)        // testa arrayen
    {
        console.log(numberArray[x]);
        imageArray[x] = createImg(x);
    }
    
    function createImg(nr){                             // Skapa images
        var img = document.createElement('img');
        var a = document.createElement('a');
        a.href="#";
        
        //TODO: Onclick
        
        var number = numberArray[nr];
        var convertString = number.toString();
        var toString = "pics/" + convertString + ".png";
        
        img.src = toString;          // Generera bild
        
        console.log(toString);
        
        a.appendChild(img);
        
        return a;
    }
    
    
    
    for(var i = 0; i < cols; i+=1)
    {
        tr = document.createElement('tr');
        div.appendChild(tr);
        
        for(var y = 0; y < rows; y+=1)
        {
            td = document.createElement('td');
            var theImage = imageArray[counter];
            counter+=1;
            
            td.appendChild(theImage);
            div.appendChild(td);
        }
    }
    
}

window.onload = Memory.init;