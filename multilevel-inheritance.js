//college-->student
class college{
    m1(){
        console.log("swarnandhra college");
        
    }
}
class student extends college{
    m2(){
        console.log("iam from CSE dept");
    }
}
class  section extends student{
    m3(){
        console.log("from section e");
        
    }
}
let d=new section()
d.m1()
d.m2()
d.m3()

//person-->employee-->manager
class person{
    m2(){
        console.log("iam a normal person");
        
    }
}
class employee extends person{
    m3(){
        console.log("iam an employee");
        
    }
}
class manager extends employee{
    m4(){
        console.log("iam an manager ");
        
    }
}
let d=new manager()
d.m4()
d.m3()
d.m2()

// bank-->account-->savings account
class bank{
    constructor(name){
        this.a=name
    }
    show(){
        console.log("name: ",this.a);      
    }}
class account extends bank{
    constructor(name,hldname){
        super(name)
        this.b=hldname
    }
    showacc(){
        super.show()
        console.log("hldname:",this.b);      
    }}
class savings extends account{
    constructor(name,hldname,type){
        super(name,hldname,type)
        this.c=type
    }
    showtype(){
        super.showacc()
        console.log("type:",this.c);      
    }
}
let e=new savings("ANDHRA BANK","rama","personal")
e.showtype()


// teacher-->principal-->manager
class teacher{
    constructor(teacher){
        this.a=teacher
    }
    show(){
        console.log("teacher:",this.a);
    }
}
class principal extends  teacher{
    constructor(teacher,principal){
        super(teacher)
        this.b=principal
    }
    showdet(){
        super.show()
        console.log("belongs to:",this.b);      
    }}
class manager extends principal{
    constructor(teacher,principal,manager){
        super(teacher,principal,manager)
        this.c=manager
    }
    showman(){
        super.showdet()
        console.log("belongs to:",this.c);      
    }}
let e=new manager("teacher","principal","manager")
e.showman()
