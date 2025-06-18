const user={
    username:"jot",
    age:19,
    class:"b.tech"


}
console.log(user.username);
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}
delete user.class;
console.log("*******after delete***********");

for(let key in user){
    console.log(`${key} value:${user[key]}`);

}
console.log("**********add key**********");
user.lastname="singh";
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}
console.log("**********modilfy key**********");
user.lastname="s2";
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}
console.log("**********duplicate key**********");
user.username="user 2";
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}
console.log("******multiply*******");
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

const nu = [65, 44, 12, 4];
const newAr = numbers.reduce(myFunction)

function myFunction(acc,element)
{
acc=acc+element;
 
  return acc;
}
console.log(newAr);

const age=["10","20","30"]
let age2=age.filter((element,index)=>{
    return element>20;
})
console.log(`${age2} at ${index}`);