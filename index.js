function showAns(a)
{
    
    var x = document.querySelectorAll(".answer")[a];
    var s = document.querySelectorAll("svg")[a];
    
    if (x.style.display === "none") {
        for(var i=0; i<6; i++){
            var y = document.querySelectorAll(".answer")[i];
            y.style.display = "none";
        }
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}