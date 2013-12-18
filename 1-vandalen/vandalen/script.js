"use strict";

var makePerson = function(persArr){
        var result = {};
        result.names;
        result.maxAge = 0;
        result.minAge = 10000;
        result.averageAge = 0;
        

        // Åldrar
        var ageSum = 0;
        
        for(var y = 0; y < persArr.length; y+=1)
        {
            ageSum = (ageSum + data[y].age);

            if(data[y].age > result.maxAge)
            {
                result.maxAge = data[y].age;
            }
            
            if(data[y].age < result.minAge)
            {
                result.minAge = data[y].age;
            }
        }
        
        result.averageAge = (ageSum / 3);
        result.averageAge = Math.round(result.averageAge);
        
        // Namn
        
        for(var i = 0; i < 2; i+=1)
        {
            var calculator = data[i].name.localeCompare(data[i+1].name, 'sv');      // OBS OBS Trots ett error så skulle jag hävda att den här tar hänsyn till svenska?
                                                                                    // Någonting som jag har missförstått?
                                                                                    
                                                                                    // Detta exempel används även på http://www.w3schools.com/jsref/jsref_localecompare.asp
            
            if(calculator === 1)
            {
                var tempString = data[i+1].name;
                data[i+1].name = data[i].name;
                data[i].name = tempString;
            }
        }
        
        var tempNames ="";
        
        for(var x = 0; x < persArr.length; x+=1)
        {
            if(x != persArr.length - 1)
            {
                tempNames = (tempNames + data[x].name + ", ");
            }
            
            else
            {
                tempNames = (tempNames + data[x].name);
            }
        }
        
        result.names = tempNames;
        result.names.split(",");
        
        return result;
    };

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    var result = makePerson(data);
    
    console.log(result);
    
    
    


