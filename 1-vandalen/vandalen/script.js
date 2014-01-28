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
        
        result.averageAge = (ageSum / persArr.length);
        result.averageAge = Math.round(result.averageAge);
        
        // Namn

        var tempArray = new Array();

        for(var i = 0; i < persArr.length; i+=1)
        {
            tempArray[i] = data[i].name;
        }

        tempArray.sort(function(a, b) { return a.localeCompare(b, 'SV') });
        
        for(var b = 0; b < persArr.length; b+=1)
        {
            data[b].name = tempArray[b];
        } 
         
        console.log(tempArray);
        
     
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
     var data = [{name: "Ä", age: 37}, {name: "Ö", age: 36}, {name: "Å", age: 46}];
    
    var result = makePerson(data);
    
    console.log(result);
    
    
    


