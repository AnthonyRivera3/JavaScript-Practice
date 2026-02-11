//alert makes a pop up on the website pop up
//code-----//alert("Hello Javascript");

//example of how java can modify the css of the website
//DOM manipulators Document object modle
document.body.style.background = "blue";
document.body.innerHTML ="<h1>Hello world</h2>"
document.body.style.color = "yellow";

//console log just prints a message to the console on your inspect webpage. This is used for debugging looking for errors mainly. 
console.log("hello world");
console.log(10+10);

// let creates a variable

//storing string data types:
//const name
//let name
//var is the same thing as let

//I can also input raw integers into let. Javascript Let takes integer and string values and boolean values.
//If I mix it up then the string turns the integer into a string.
console.log("7"+ 4);
//For boolean functions I can just use let. 
let isloggedin = false; 

//for if statements if i want to say if something is = to it is ==
if(isloggedin==false){
    console.log(true);
}


//creating two variables in different ways
let user1 = 2;
let user2
user2 = "Anthony";
console.log(user1);

//prints user2 to console
console.log(user2);
user2="james";
console.log(user2);


//arithmatic operators
//*, +, -, /, %, --, ++, +=, -=
//new operator: ** This solves in power. so you would do (2**3) which is 2 to the power of 3. 

//logical operators
// >, <, >=, <=, == , !=
//new operator: Also checks data type(returns boolean value) === , !== checks for if it is not equaL data type

//conditional statements

let password = "1234"
let dbpassword = "1234"

if(password == dbpassword){
    console.log("welcome " + user2)
}else{
    console.log("Wrong password")
}
  

//loops
/*
for(let i =0; i<10; i++){

};


while(){

};


//dowhile loop


//for each loop

*/


//functions

function sayhello(){
    alert("Hello function")
    console.log("Hello function")
}

//calling function
sayhello();