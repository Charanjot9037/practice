//object

const user={
    username:"jot",
    age:19,
    class:"b.tech"


}
//acc data from object
console.log(user.username);
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}
//delete key from object
delete user.class;
console.log("*******after delete***********");

for(let key in user){
    console.log(`${key} value:${user[key]}`);

}


//add key in object
console.log("**********add key**********");
user.lastname="singh";
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}

//modlify key
console.log("**********modilfy key**********");
user.lastname="s2";
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}

//duplicate key
console.log("**********duplicate key**********");
user.username="user 2";
for(let key in user){
    console.log(`${key} value:${user[key]}`);

}
//multiply array by 10 using map fuction 
console.log("******multiply*******");
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);
//reduce array method 
console.log("******reduce array method*******");
const nu = [65, 44, 12, 4];
const newAr = numbers.reduce(myFunction)

function myFunction(acc,element)
{
acc=acc+element;
 
  return acc;
}
console.log(newAr);
console.log("******filter*******");
//filter method
const age=["10","20","30"];
let age2=age.filter(function(element,index){
    return index%2==0;
}
)
console.log(`${age2} `);
//computed properties
console.log("******computed *******");
let property = "user";
 let person = { 
    [property]: "charanjot singh"
 };
 console.log(person);
 //multiword keys
 console.log("******multi keys*******");
 let user1 = {
    
 };
  user1["like the video"] = true; 
  console.log(user1["like the video"]);
  //loop im object

   console.log("******looping objects*******");
   let user3 = { 
    name: "jot", 
    age: 20
 }; 
    for (let key in user3) 
        { console.log(`${key}:${ user3[key]}`); }
    //json stringify
    let jsn=JSON.stringify("hello");
    console.log(jsn);
//spread in array
    console.log("********spread*****");
    let ar1=[1,2];
    let ar2=[...ar1,3,4]
    console.log(ar2);
    //rest 
    function sum(...args){
        return args.reduce((acc,element)=>{
                acc=acc+element;
            return acc;
      
        })
    }
    console.log(sum(1,2,3,4));
    //destructring objects
     console.log("********destructuring*****");
    const user5 = { name: "cjs", age: 20 };
     const { name } = user5;
     console.log(name);
     //renaming in object
     console.log("*******rename*******");
     const {name:cjs} ={name :"jot"}
     console.log(cjs);
     //code mutation via functon
      console.log("*******object mutataion*******");
     function changeAgeAndReference(person)
      { person.age = 25;
         person = { name: 'John', age: 50 };
          return person; 
        } 
        const personObj1 = { name: 'Alex', age: 30 }; 
        const personObj2 = changeAgeAndReference(personObj1);
         console.log(personObj1);
         console.log(personObj2); 





const obj = {
a: 10,
x: function () {
console.log(this); // {a: 10, x: f()}
console.log(this.a); // 10
},
};
obj.x(); // value of this is referring to current object i.e. obj

     //functio borrow using call it is called automatically

     let printname=function(loc){
        console.log(this.name+" from "+loc);
     }
     let nm1={
        name:"js singh",
        age:22,
        
     }
    
      let nm2={
        name:"sk singh",
        age:24,
        }
printname.call(nm2,"call");

//apply method it takes argments in array

printname.call(nm2,["apply"]);

//bind method it return a function with binded values which will be called later 
let prtname=printname.bind(nm1,"bind");
prtname();