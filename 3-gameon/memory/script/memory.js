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
    
    var counter = 0;
    
    var imageArray = [];
    var count = 0;
    var tries = 0;
    var firstGuess = 0;
    var secondImage;
    var lastClick;
    var winnerWinnerChickenDinner = 0;
    
    var neededChickenDinners = ((cols * rows) / 2);
    
    
    
    for(var x = 0; x < numberArray.length; x+=1)        // Skapa bilder
    {
        imageArray[x] = createImg(x);                   // Lägg a-taggade bilder i ny array
    }
    
    function createImg(nr){                             // Skapa images
        var img = document.createElement('img');
        var a = document.createElement('a');
        a.href="#";
        
        a.onclick = function(e){
            var messId = this.parentNode.id;
        
            if((lastClick === e.target) === false && count < 2)
            {
                count+=1;
                
                if(count === 1)
                {
                    var convertString = messId.toString();
                    var toString = "pics/" + convertString + ".png";
                    
                    firstGuess = messId;
                    
                    secondImage = img;
                    
                    lastClick = e.target;
                    
                    
                    img.onclick = null;
                    
                    img.src = toString;
                }
                
                if(count === 2)
                {
                    var convertString2 = messId.toString();
                    var toString2 = "pics/" + convertString2 + ".png";
                    
                    img.src = toString2;
                    
                    
                    lastClick = null;
                    
                    if(firstGuess === messId)
                    {
                        winnerWinnerChickenDinner += 1;
                        
                        if(winnerWinnerChickenDinner === neededChickenDinners)
                        {
                            var winnerDiv = document.getElementById("winPrompt");
                            
                            var p = document.createElement('p');
                            
                            var makeString = tries.toString();
                            
                            var text = document.createTextNode("Grattis, du vann! Misslyckade gissningar: " + makeString);
                            
                            
                            p.appendChild(text);
                            winnerDiv.appendChild(p);
                        }
                        
                        count = 0;
                    }
                    
                    else
                    {
                        setTimeout(function() {
                            img.src = "pics/0.png";
                            secondImage.src = "pics/0.png";
                            count = 0;
                        }, 1000);   
                        
                    tries += 1;
                }
                
            }
            }
        };
    
        
        img.src = "pics/0.png";
        a.appendChild(img);
        
        return a;
    }
    
    var internalCounter = 0;
    
    for(var i = 0; i < cols; i+=1)                      // Skriv ut bilder
    {
        tr = document.createElement('tr');
        div.appendChild(tr);
        
        for(var y = 0; y < rows; y+=1)
        {
            td = document.createElement('td');
            var theImage = imageArray[counter];
            counter+=1;
            
            td.id = numberArray[internalCounter];                   // Få samma ID på samma bild
            
            internalCounter+=1;
            
            td.appendChild(theImage);
            div.appendChild(td);
        }
    }
    
    
    
    
}

window.onload = Memory.init;