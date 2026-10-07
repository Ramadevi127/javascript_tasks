function sum(){
    let num = parseInt(document.getElementById("sum1").value)
    let sum = 0
    for(let i=1;i<=num;i++){
        sum = sum + i
    }
    document.getElementById("res3").value = sum
}


function mul(){
    let num = parseInt(document.getElementById("mul1").value);
    res = "";
    for(let i = 1; i <= 10 ; i++){
        res += (num + " X " + i + " =" + num*i + "\n");
        document.getElementById("res1").value = res ;
    }
}


function fact(){
    let num = parseInt(document.getElementById("fact1").value);
    let fact = 1;
    for(let i = num; i >= 1 ; i--){
        fact *= i
        document.getElementById("res2").value = fact ;
    }
}