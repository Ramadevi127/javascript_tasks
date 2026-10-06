function positive(){
    var n1=parseInt(document.getElementById("num1").value)
    if(n1>0){
        result="positive";
    }
    else{
         result="negitive";
    }
document.getElementById("result1").value=result;
}

function smallest(){
    let n2=parseInt(document.getElementById("num2").value)
    let n3=parseInt(document.getElementById("num3").value)
    if(n2<n3){
        small=n2+" is smallest mumber"
    }
    else{
        small=n2+"big number"
    }
    document.getElementById("result2").value=small;
}


function divisle(){
    var  n4=parseInt(document.getElementById("num4").value)
    if(n4%3==0){
        div="divisible by 3"
    }
    else{
        div="not divisible by 3"
    }
    document.getElementById("result3").value=div;
}
function evenodd(){
    var n5=parseInt(document.getElementById("num5").value)
    if(n5%2==0){
        even=n5+" is a even"
    }
    else{
        even=n5+" is odd"
    }
    document.getElementById("result4").value=even;

}


function discount(){
     var n6=parseInt(document.getElementById("num6").value)
    if(n6>5000){
        discont=n6*(20/100);
        diss=n6-discont;
    }
    else{
        diss=n6;
        
    }
    document.getElementById("result6").value=diss;
    
}