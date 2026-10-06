//calculations task
class operations{
    static add(){
        console.log(10+20,);   
    }
    static sub(a,b){
        console.log(a-b);
    }
    static mul(){
        return 10*2
    }
    static  modulus(c,d){
         return c%d;
    }

}
operations.add()
operations.sub(22,20)
let a=operations.mul()
console.log(a);
let b=operations.modulus(20,10)
console.log(b);

//check weather a num is positive or negative or zero
//  without input and without return
function check(){
    let a=12
    if(a>0){
        console.log("positive");     
    }
    else if(a<0){
        console.log("negative");
    }
    else{
        console.log("zero");      
    }
}
check()


// without input and with return
function prime(){
    let a=5
    c=0
for(let i=1;i<=a;i++){
          if(5%i==0){
             c=c+1
          }
        }
if(c==2){
        return("prime");   
    }
else{
       return("not prime");    
    }
    }
let b=prime()
console.log(b);

//Write a function to find the factorial of a number.
// with input and without retun
function fact(a){
fact=1
for(let i=a;i>=1;i--){
    fact=fact*i
}
console.log(fact);
}
fact(5)

// with input and with return
function rev(n){
rev=0
while(n>0){
    a=n%10
    rev=rev*10+a
    n=parseInt(n/10)
}
return (rev);
}
let c=rev(1234)
console.log(c);
