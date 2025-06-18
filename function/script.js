


//function statement
function a(){
     console.log("i a function statement");
}
a();



//function expression
let b=function abc()
{
    console.log("i am function expression");
    return "hello a ";
}
b();


//paramter function
let num1=1;
let num2=3
function add(num1,num2)
{
    let num3=num1+num2;
    return num3;
}
let num4=add(num1,num2);
console.log("Addition by using paramiterized function",num4);
//ARROW FUNCTION
let c= ()=>{
    console.log(" I am arrow function ");
}
c();
//IIFE
(function(){
    console.log("i am immediately invoked function expression")
})



//VALUES FROM IIFE

let result=(function(){
    var rs="jot";
    console.log("iife");
    return rs;
})
();

console.log("TAKEN VALUES FROM IIFE",result);

//higher order function
function xx(){
    console.log("hello from x inside y");
}
function y(xx){
    xx();
}
y(xx);


//diff in arrow and function statement

console.log("**************diff in normal and arrow function**************")
const user={
   
    jot:"100",
    
    us:function b(){
        console.log(this.jot);
    },
    aw:()=>{
        console.log(this.jot);
    }
}
user.us();
user.aw();

//closure
console.log("**************closure**************")


function welcome(name){
    var greetinginfo=function(message){
        console.log(message," ",name);
        
    };
    return greetinginfo;
}
var myfunction=welcome("john");
myfunction("closure");
myfunction("jot mr ");



//for loop
console.log(" **************for loop **************")
for(let i=1;i<=10;i++){
    console.log(i);
}



//while loop
console.log("**************while loop**************");
let ac=1;
while(ac<=10)
{
    console.log(ac)
    ac++;
}
console.log("**************do while loop **************");
let EE=10;
do{
    console.log(EE);
EE++;
}
while(b<=20);

console.log("************** for each loop **************");

let arr=["jot","simi","sartaj","hrshal"];
arr.forEach((element,index) => {
    console.log(`${element} at index${index}`);
});
//for of loop
console.log("************** for of loop **************");
for(let clr of arr ){
    console.log(clr);
}
//for in loop
console.log("************** for in loop **************");
let usr={
    username:"jot",
    password:"123"
}
for(let user in usr){
    console.log(`${user} value :${usr[user]}`);
}


//ternanry operator
console.log("************** teriary operator **************")
let x=20;
(x<40)?console.log("ture"):console.log("false");

//nullish operator
console.log("************** nullish operator **************");
var username=null;
let name=username??"jot";
console.log(name);
//optional chaining
console.log("************** option chaining **************");
let animal={
    dog:{
        name:"pugg"
    }
}
let name2=animal.dog?.name;
console.log(name2);

//switch statement
console.log("**************swicth statement");
let sw=30;



switch(sw)
{
    case 20:
    case 50 :console.log("exact");
    break;
    default:
        console.log("not exact");
}