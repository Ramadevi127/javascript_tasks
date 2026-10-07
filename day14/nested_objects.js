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



let student = {
    name: "Rama",
    age: 21,
    education: {
        degree: "B.Tech",
        branch: "CSE",
        college: "Swarnandhra College"
    }
};

console.log(student.name);
console.log(student.education.degree);
console.log(student.education.branch);
console.log(student.education.college);
