"use strict";

window.onload = function(){
    
    var i = 0;
    var newString = " ";
    

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		
	try
	{
	    if (str.length === 0)
	    {
	        throw new NoStringFoundException();
	    }
    	for(i = 0; i < str.length; i+=1)
        {
    	
        var character;
            
            character = str.charAt(i);
            
            if(character == "A" || character == "a")
            {
                newString += "#";
            }
            
            else
            {
            
                if(character == character.toUpperCase())        // Om det är stor bokstav
                {
                    newString += character.toLowerCase();
                }
                
                if(character == character.toLowerCase())        // Om det är liten bokstav
                {
                    newString += character.toUpperCase();
                }
            }
        }
    
          return newString;
	}
	
	catch(err)
	{
	    return "Ingen text togs emot, ladda om sidan och försök igen.";
	}
	
	function NoStringFoundException() {
	    return "Ingen text kunde hittas, ladda om sidan och försök igen.";
	}
	
    };
	
	
	
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};