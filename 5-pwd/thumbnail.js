"using strict";

function AjaxCon(url, callback){

    var xhr = this.getXHR();
    
    console.log("Den körs iaf");
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
            {
                callback(xhr.responseText);
            }
            
            else{
                console.log("Läsfel.");
            }
        }
    };
    
    xhr.open("get", url, true);
    
    xhr.send(null);
}

AjaxCon.prototype.getXHR = function () {
    var xhr = null;
    
    try {
        xhr = new XMLHttpRequest();
    }
    
    catch (error) {
        throw new Error("Inget XHR objekt tillgängligt.");
    }
    
    return xhr;
};