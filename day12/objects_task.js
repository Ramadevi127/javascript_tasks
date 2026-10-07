//func with input and without return(obj)
// eg-1
// function student(a){
//     console.log(a.name);
//     console.log(a.class);
// }   
//     let detials={
//     name:"rama",
//     class:"batch60",
//     course:"FSD",
//     location:"kukatpally"
// }

// student(detials);

//eg-2

// function coaching(b){
//     console.log(b.name);
//     console.log(b.courses);
// }
// let innomatics={
//     name:"innomatics",
//     area:"kukatpally",
//     courses:"fsd,DS,AIML"
// }
// coaching(innomatics)

//func with input and with return(obj)
// function hero(a){
//     return a.color
// }
// let shoping={
//     type:"offline",
//     dress:"kurthi",
//     price:500,
//     color:"green"
// }
// let b=hero(shoping)
// console.log(b);

//ex-2
// function favourite(a){
//    return a
// }
// let vizag={
//     name:"vizag",
//     best:"beach",
//     type:"RK beach"
// }
// let b=favourite(vizag)
// console.log(b);


//obj with 3 diff types of func
//named func
//without input without return
// let laptop={
//     name:"asus",
//     storage:"23gb",
//     price:60000,
//     display:function hello(){
//         console.log("iam a good girl");       
//     }
// }
// laptop.display()

//with input withhout return
// let school={
//     name:"bhashyam",
//     class:"10",
//     area:"rajam"
// }
// function hi(a){
//         console.log(a.name);       
// }
// hi(school)

//without input with return
// let school={
//     name:"bhashyam",
//     class:"10",
//     area:"rajam",
//     display:function hi(){
//             return school.name
// }
// }
// let c=school.display()
// console.log(c);

//with input with return
// let chocolate={
//     name:"kitkat",
//     price:20,
//     size:"small",
// }
//     function zero(a){
//         return  a.name
//     }
// let b=zero(chocolate)
// console.log(b);

//anynomous func
//without input without return
// let hostel={
//     name:"laxmi nilayam",
//     rent:8000,
//     area:"sardar patel",
//     display:function(){
//         console.log("welcome");
        
//     }
// }
// hostel.display()

//with input and without return
// let intermediate={
//     name:"narayana",
//     fee:300000,
//     area:"vizag",
// }
//     display=function(a){
//         console.log(a.name);        
//     }
// display(intermediate)

//without input with return
// let house={
//     type:"own",
//     area:"2acres",
//     price:100000,
//     display:function(){
//             return "helloo all"
//     }
// }
// let a=house.display()
// console.log(a);

//with input with return
// let student={
//     name:"rama",
//     gender:"f",
//     job:"developer",
// }
// let a=function(b){
//     return b.name
// }
// let c=a(student)
// console.log(c);


//arrow function
//without input without return
// let phone={
//     name:"vivo",
//     price:20000,
//     color:"black",
//     c:()=>{
//         console.log("hello");
        
//     }
// }
// console.log(phone.c());

//with input without return
// let bag={
//     name:"skybag",
//     price:1200,
//     color:"blue"
// }
// let a=(hello)=>{
//     console.log(a=hello);
    
// }
// console.log(a("rama"));

//without input with return
//  let phone={
//     name:"vivo",
//     price:20000,
//     color:"black",
//     c:()=>{
//        return  phone.name   
//     }
// }
// let a=phone.c()
// console.log(a);

//with input with return
//  let bag={
//     name:"skybag",
//     price:1200,
//     color:"blue"
// }
// let a=(hello)=>{
//     return  hello;   
// }
// let c=a("how r u")
// console.log(c);

//nested objects
let student={
    name:"rama",
    gender:"f",
    location:{
        area:"vizag",
        state:"andhrapradesh",
        dist:"viziznagram",
        education:{
            ssc:"bhashyam",
            inter:"narayana",
            "B.Tech":"swarnandhra",
            pincode:{
                num:532127,
                "house-no":201,
                 job:{
                    company:"Deloite",
                    package:"8LPA",
                    type:"onsite"
                 }
            }
        }
    }
}
//access
// console.log(student);
// console.log(student.location);
// console.log(student.location.education);
// console.log(student.location.education.pincode.job);
// console.log(student.location.state);
// console.log(student.location.education.ssc);

//update
// student.location.area="rajam"
// student.name="harika"
// student.location.education.pincode=432123
// student.location.education.pincode.job.company="wipro"
// student.location.education["B.Tech"]="gmr"
// console.log(student);

//delete
delete student.location.area
delete student.location.education.inter
delete student.location.education["B.Tech"]
delete student.location.education.job
console.log(student);

