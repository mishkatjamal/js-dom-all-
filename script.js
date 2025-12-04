
// !SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.
// * for that I need to create 10 object with same brand and pice and all it quite bad practice and too much same code thats why we need to create a class for that

// let laptop = {
//     brand:"nike",
//     price:2000,
//     start :function(){
//         console.log("laptop started");
        
//     },
//     increase:function(){
// console.log(this.price + 200);

//     }
// }
// laptop.start();
// laptop.increase();
// ⸻

//! SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again? 
// * it is easy to use no need to create object for every same things easy to manage 

//^ class Employee{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     showDetails(){
//         console.log(this.name ,this.salary);
        
//     }
// }
// let e1 = new Employee("mishkat",100000);
// let e2 = new Employee("ceis",30000);
// let e3 = new Employee("jamal",40000);
// e2.salary = 240;
// e2.showDetails();
// e1.showDetails()
// e3.showDetails()
// ⸻

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.
// * because i create the method deposite in prototype thats why its store in shared memory 
//^ class BankAccount{
//     constructor(accountHolderName, balance){
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
//     deposit(amount){
//          this.balance += amount ;
//     }
// }
// let b1 = new BankAccount("mishkat",1000);
// let b2 = new BankAccount("jamal",2000);
// console.log(b1.balance);
// b1.deposit(500);
// console.log(b1.balance);
// console.log(b2.balance);




// ⸻

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

// ^let profile = {
//     username:"mishkat",

//     fnc:function(){
//         console.log(this.username);
        
//     }
// }
// profile.fnc();

// let fn = profile.fnc;
//  fn(); //! ab ye object ka nahi window ka hissa hai is liye undefiend aaega  

//  let fn2 = profile.fnc.bind(profile);
//  fn2(); //! bind ka use is liye kya hai kuy ki bind hame return kare ga functions jo hum ne fn2 me save kar liya hai 
// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.
// * ek hi fucntions create ho ta hai or ye shared memory me hota hai jisse hame baar baar same function nahi banana padta or isse hamri kafi memory bhi save rehti hai jisse speed performance increase hota hai 
// function Vehicle(type,wheel){
//     this.type = type;
//     this.wheel = wheel;
//     // this.desctibe = function(){
//     //     console.log("hllo");
        
//     // }
    
// }
// Vehicle.prototype.desctibe = function(){
// console.log("calo");

// }

// let v1 = new Vehicle("jeep","tvs")
// v1.desctibe();
// // ⸻

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.
// ^function ShowBrand(brand){
//     console.log(this.brand);
// }

// let obj1 = {
//     brand:"apple"
// }
// let obj2 = {
//     brand:"samsung"
// }
// ShowBrand.call(obj1);
// ShowBrand.call(obj2);
// * call use karne se hame undefiend nahi mile ge kuy ki bina call() hum object me brand dhoond rahe hai jisme this ki value window hai
// ⸻

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.
// function Introduce(city,role){
//     this.city = city;
//     this.role = role;
// }
// let person ={
//     name:"mishkat"
// }
// let i1 = Introduce.apply(person,["mumbai","developer"]);
// console.log(person);

// ⸻

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
// Displaying Day 58 - Question Sheet 2.md.

function greet(name){
    console.log("hello",this.name);
    
}
let person = {
    name:"mishkat"
}
let g1 = greet.bind(person);
g1();


