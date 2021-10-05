var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var f = new Date();
    document.getElementById("demo").innerHTML= f.toLocaleTimeString();
}
