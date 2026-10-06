


function add(){
    let n1 =parseInt( document.getElementById("n1").value)
let n2 = parseInt( document.getElementById("n2").value)
let sum = n1 + n2;
 document.getElementById("n3").value=sum
 }




function avg(){
    let n1 =parseInt( document.getElementById("n1").value)
    let n2 = parseInt( document.getElementById("n2").value)
    let n3 = parseInt(document.getElementById("n3").value)


let sum = n1 + n2 + n3;

let avg = sum/3


 document.getElementById("res2").value=avg
 }

function sumofnatural(){
 let n =parseInt( document.getElementById("b1").value)
let sum = n*(n+1)/2;
document.getElementById("b2").value=sum
}

function avgofnatural(){
     let n =parseInt( document.getElementById("c1").value)
     let sum = n*(n+1)/2;
     let avg = sum/n;
     document.getElementById("c2").value=avg

}

function traingle(){
let a1 = parseInt( document.getElementById("d1").value) ;
let a2 = parseInt( document.getElementById("d2").value);
let sum = a1+a2;
let missing = 180-sum;
document.getElementById("res5").value=missing

}

function profit(){
    let sp= parseInt( document.getElementById("sp").value) ;
    let cp=  parseInt( document.getElementById("cp").value) ;
    let profit = sp-cp
    let profitper = profit/cp*100
    document.getElementById("res6").value=profitper


}

function sIinterest(){
    let amount = parseInt( document.getElementById("amount").value) ;
    let interest = parseInt( document.getElementById("interest").value) ;
    let time = parseInt( document.getElementById("time").value) ;
    let si = amount*interest*time/100
    document.getElementById("res7").value=si


    
}
