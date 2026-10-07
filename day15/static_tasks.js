class Student {
    // without input and without return
    static display(){
        let name="Rama";
        let marks=85;
        console.log("Name:",name);
        console.log("Marks:",marks);
    }
    // with input and without return
    static checkMarks(marks){
        if(marks>=35){
            console.log("Student is Pass");
        }
        else{
            console.log("Student is Fail");
        }
    }
    // without input and with return
    static getCollege(){
        return "Swarnandhra College";
    }
    // with input and with return
    static percentage(total,marks){
        return (marks/total)*100;
    }
}
Student.display();
Student.checkMarks(75);
console.log(Student.getCollege());
console.log(Student.percentage(500,425));


class Bank{
    //without input and without return
    static bankname(){
        console.log("Bank Name: Andhra Bank");
    }
    //with input and without return
    static deposit(amount){
        console.log("Deposited amount:",amount);
    }
    //without input and with return
    static interest(){
        return 5000;
    }
    //with input and with return
    static balance(amount,withdraw){
        return amount-withdraw;
    }
}
Bank.bankname();
Bank.deposit(10000);
console.log("interest:",Bank.interest());
console.log("balance:",Bank.balance(20000,5000));



class Shopping{
    //without input and without return
    static welcome(){
        console.log("Welcome to Shopping Mall");
    }
    //with input and without return
    static product(name,price){
        console.log("product:",name);
        console.log("price:",price);
    }
    //without input and with return
    static discount(){
        return 20;
    }
    //with input and with return
    static finalprice(price,discount){
        return price-(price*discount/100);
    }
}
Shopping.welcome();
Shopping.product("Laptop",50000);
console.log("discount:",Shopping.discount());
console.log("final price:",Shopping.finalprice(50000,10));
