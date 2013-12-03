"use strict";

var makePerson = function(persArr){
        var result = {};
        result.names;
        result.maxAge = 0;
        result.minAge = 0;
        result.averageAge = 0;
        
        

        // Åldrar
        var ageSum = (data[0].age + data[1].age + data[2].age);
        result.maxAge = Math.max(data[0].age, data[1].age, data[2].age);
        result.minAge = Math.min(data[0].age, data[1].age, data[2].age);
        
        result.averageAge = (ageSum / 3);
        result.averageAge = Math.round(result.averageAge);
        
        // Namn
        
        for(var i = 0; i < 2; i+=1)
        {
            var calculator = data[i].name.localeCompare(data[i+1].name, 'sv');      // OBS OBS Trots ett error så skulle jag hävda att den här tar hänsyn till svenska?
                                                                                    // Någonting som jag har missförstått?
            
            if(calculator === 1)
            {
                var tempString = data[i+1].name;
                data[i+1].name = data[i].name;
                data[i].name = tempString;
            }
        }
        
        var tempNames = data[0].name + ", " + data[1].name +", " + data[2].name;
        
        result.names = tempNames;
        result.names.split(",");
        
        return result;
    };

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    console.log(data[0].age);
    
    var result = makePerson(data);
    
    console.log(result);
    
    
    


