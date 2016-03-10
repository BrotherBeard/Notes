/**
 * 'asynchronous javascript xml' fundamentals
 * 
 * 
 */

//get XMLHttpRequest object
function xmlHttpRequest () {
    // Mozillia, safari, IE 7+ ....
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    // IE 6 and older
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}

(function () {
    var xmlHttp = xmlHttpRequest();
    var userName = "otobelikethee";
    if (!xmlHttp) {
        console.log("browser doesn't support ajax");
    }
    xmlHttp.open("POST","http://bebrother.com/test.php",true); // asynchronous default
    xmlHttp.SetRequestHeader("Content-Type","application/x-wwww-form-urlencoded");
    xmlHttp.send("name=" + encodeURIcomponent(userName));
    xmlHttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var e = document.createElement("p");
                var t = document.createTextNode(this.responseText);
                e.appendChild(t);
            } else {
                //other's http response code : 404,403,301,302,304,500
            }
        } else {
            //http request continue...
        }
})();
