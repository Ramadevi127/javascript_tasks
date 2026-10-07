//bank-->account
class bank{
    constructor(name){
        this.bankname=name
    }
    detials(){
        console.log("bankname:",this.bankname);       
    }
}
class account extends bank{
    constructor(name,accnum,bal){
        super(name)
        this.accnum=accnum
        this.bal=bal
    }
    accountdet(){
        super.detials()
        console.log("accnum:",this.accnum);
        console.log("balance:",this.bal);       
    }
}
let a=new account("SBI",10123,45000)
a.accountdet()

//animal-->dog
class animal{
    constructor(name){
        this.a=name
    }
    animal(){
        console.log("name:",this.a);
        
    }
}
class dog extends animal{
    constructor(name,breed){
        super(name)
        this.b=breed
    }
    dog(){
        super.animal()
        
        console.log("breed:",this.b); 
    }
}
let b=new dog("animal","girl")
b.dog()

//doctor-->cardiologist
class doctor{
    constructor(profession){
        this.a=profession
    }
    show(){
        console.log("profession:",this.a);      
    }
}
class specilization extends doctor{
    constructor(profession,type){
        super(profession)
        
        this.b=type
    }
    profession(){
       super.show()
       console.log("type:",this.b);     
    } 
}
let c=new specilization("doctor","cardiologist")
c.profession()

//person-->employee
class person{
    constructor(name,age){
        this.a=name
        this.b=age
    }
    show(){
        console.log("name:",this.a);
        console.log("age",this.b);
        
    }
}
class employee extends person{
    constructor(name,age,work){
        super(name,age)
        this.c=work
    }
    show_employee(){
        super.show()
        console.log("work:",this.c);
        
    }
}
let d=new employee("rama",22,"developer")
d.show_employee()

//bank-->account
class bank{
    constructor(name){
        this.a=name
    }
    show(){
        console.log("name:",this.a);
        
    }
}
class account extends bank{
    constructor(name,type){
        super(name)
        this.b=type
    }
    show_type(){
        super.show()
        console.log("type:",this.b);
        
    }
}
let c=new account("SBI","SAVINGS")
c. show_type()
