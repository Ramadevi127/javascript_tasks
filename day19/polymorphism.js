//runtime using single inheritance
class animal{
    m1(){
        console.log("iam a animal");
        
    }
}
class dog extends animal{
    m1(){
        console.log("iam a dog belongs to animal");       
    }
}
let a=new dog
a.m1()
let b=new animal
b.m1()

//multilevel inheritance
class chatgpt{
    m2(){
        console.log("i learn from data");       
    }
}
class teacher extends chatgpt{
    m2(){
          console.log("i  am a teacher i learn from chatgpt"); 
    }
}
class student extends teacher{
    m2(){
          console.log("i learn from teacher"); 
    }
}
let d=new chatgpt
d.m2()
let e=new teacher
e.m2()
let f=new student
f.m2()


//hirarichal inheritance
class teacher{
    m3(){
        console.log("i am a teacher");       
    }
}
class student1 extends teacher{
    m3(){
         console.log("i am a student1 learn from teacher"); 
    }
}
class student2 extends  teacher{
    m3(){
            console.log("i am a student2 learn from teacher")
    }
}
let f=new teacher
f.m3()
let g=new student1
g.m3()
let h=new student2
h.m3()


//multilevel inheritance
class device{
    m4(){
        console.log("i am a device");       
    }
}
class computer extends device{
    m4(){
        console.log("iam a computer extends from device");       
    }
}
class laptop extends computer{
    m4(){
        console.log("iam a laptop extends from computer");  
    }
}
let i=new device
i.m4()
let j=new computer
j.m4()
let k=new laptop
k.m4()
