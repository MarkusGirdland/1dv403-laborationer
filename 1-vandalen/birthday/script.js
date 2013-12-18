"use strict";

window.onload = function(){

	var i = 0;
	
	var birthday = function(date){
	
	
	
	
	var character = "";
	var year = "";
	var month = "";
	var day = "";
		
	try
	{
        if((date.trim(date)).length===0)                // Hittad http://stackoverflow.com/questions/10528193/how-can-i-determine-if-a-string-only-contains-spaces-using-javascript
        {
            throw new WrongDateException();
        }
	
        else
        {
        for(i = 0; i < date.length; i+=1)       // For loop för hela datumets längd
        {
            character = date.charAt(i);
            
            
            
            if((i != 4 || i != 7) && (i >= 0 && i <= 9))        // Så länge i är mellan 0 och 9 men inte 4 eller 7
            {
                if(character < 0 || character > 9)
                {
                    throw new WrongDateException();
                }
                
                else
                {
                    if(i <= 3)       // Om året matas in
                    {
                        saveYear();
                    }
                    
                    if(i === 5 || i === 6)      // Om månades matas in
                    {
                        saveMonth();
                    }
                    
                    if(i === 8 || i === 9)      // Om dagen matas in
                    {
                        saveDay();
                    }
                }
            }
            
            if(i === 4 || i === 7) // Om det ska vara bindestreck
            {
                if(character != "-")
                {
                    throw new WrongDateException();
                }
            }
        } 
    
        console.log(year);
        console.log(month);
        console.log(day);
        
        var birthdayDate = new Date(year, month-1, day);
        var now = new Date();
        
        var days = 0;
        
        days = ( (birthdayDate.getTime() - now.getTime())  / (1000*60*60*24));
        
        
        if(days < 0)            // Om man redan fyllt år
        {
   
            var yearDiff = birthdayDate.getYear() - now.getYear();
            
            
            yearDiff *= -1;         // Gör om till positivt nummer 
            
            var extraDays = yearDiff / 4;
            
            extraDays = Math.round(extraDays);
            
            
            
            
            yearDiff++;
            
            
            days = days + (yearDiff  * 365) + extraDays;
            
            var monthDiff = birthdayDate.getMonth() - now.getMonth();
            var daysDiff = birthdayDate.getDay() - now.getDay();
            
            
            if(monthDiff >= 0 && daysDiff <= 0)
            {
                days-=365;
            }
            
            
            console.log(days);
        }
        
        days = Math.round(days+1);
        
        if(days === 365)
        {
            days = 0;
        }
        
        if(days === 366)
        {
            days = 1;
        }
        
        return days;

      
	}
	}
	
	catch(err)
	{
        return "ett ogiltigt antal";    
	}

    function WrongDateException()
    {
        return "ett oglitigt antal";
    }
    
    function saveYear()
    {
        year += character;
    }
    
    function saveMonth()
    {
        month += character;
    }

    function saveDay()
    {
        day += character;
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};