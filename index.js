function showAns(a)
{
    
    var x = document.querySelectorAll(".answer")[a];
    var s = document.querySelectorAll("svg")[a];
    

    for(var i=0; i<6; i++){
        var y = document.querySelectorAll(".answer")[i];
        var s2 = document.querySelectorAll("svg")[i];
        if(y==x){
            continue;
        }
        if(y.style.height!='0px'){
            s2.style.transform='rotate(0deg)';
        }
        y.style.height="0px";
        y.style.padding="0px";
    }
    if(x.style.height==="0px"){
        s.style.transform = 'rotate(45deg)';
        x.style.height=x.scrollHeight+20+"px";
        x.style.padding="15px";
    }
    else{
        s.style.transform = 'rotate(0deg)';
        x.style.padding="0px";
        x.style.height="0px";
    }
}
