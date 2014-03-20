"using strict";

var clickable = true;

var myApp = {
    
    init: function () {
        var myButton = document.getElementById("kaffePic"); 
        
        myButton.onclick = function(e) {
            e.preventDefault();
            
            if(clickable)
            {
                clickable = false;
                popup(myButton);
            }
            
            else
            {
                return false;
            }
            
        };
    }
};

function popup(theButton) {
    var myDiv = document.createElement("div");
    myDiv.className = "popupWindow";                                // Skapa div för popup
  
    var newButton = document.createElement('a');
    
    var image = document.createElement('img');                      // Lägg in bilder
    image.src = 'img/theclosebutton.png';
    image.className = "popupImage";
    
    newButton.appendChild(image);
    
    myDiv.appendChild(newButton);
    
    // Vänstra hörnet
    
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "popuph1");
    var h1Text = document.createTextNode("Image Viewer");
    h1.appendChild(h1Text);
    
    var cornerImage = document.createElement('img');
    cornerImage.src = 'img/kaffe.png';
    cornerImage.className = "popupCoffee";
    
    myDiv.appendChild(cornerImage);
    myDiv.appendChild(h1);
    
    // "Tomma" rummet
    
    var thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = "thumbDiv";
    
    
    // Ajaxanrop
    
    var myCallback = function(data) {
        var maxHeight = 0;
        var maxWidth = 0;
        
        var jsonStr = data;
        
        var pics = JSON.parse(jsonStr);
        
        var picInABox = document.createElement('div');
        
        
        for(var i in pics)                  // Ta ut max höjd och bredd
        {
            if(pics[i].height > maxHeight)
            {
                maxHeight = pics[i].height;
            }
            
            if(pics[i].width > maxWidth)
            {
                maxWidth = pics[i].width;
            }
            console.log(maxHeight);
            console.log(maxWidth);
        }
        
        picInABox.width = maxWidth;
        picInABox.height = maxHeight;
        
        
        
        
        for(var y in pics)
        {
            var thumbPic = document.createElement('img');
            thumbPic.src = pics[y].URL;
            picInABox.appendChild(thumbPic);
            
            thumbnailDiv.appendChild(picInABox);
        }
    };
    
    new AjaxCon("http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", myCallback);
    
    myDiv.appendChild(thumbnailDiv);
    
    // Statusrad
    
    var footDiv = document.createElement('div');
    footDiv.className = "footDiv";
    var text = document.createElement('p');
    text.setAttribute("id", "popupP");
    var textText = document.createTextNode("Statusrad");
    
    text.appendChild(textText);
    
    var loadingGif = document.createElement('img');
    loadingGif.src = 'img/loadbar.gif';
    
    text.setAttribute("id", "popupP");
    loadingGif.className = "loadGif";
    
    footDiv.appendChild(text);
    footDiv.appendChild(loadingGif);
    
    myDiv.appendChild(footDiv);
    
    // Lägg in diven i modalfönstret
    
    document.body.appendChild(myDiv);
    
    newButton.onclick = function () {
        document.body.removeChild(myDiv);
        clickable = true;
    };
    
}

window.onload = myApp.init;