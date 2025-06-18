
# JavaScript practice Example

This project showcases core JavaScript concepts including different types of functions, control flow structures, higher-order functions, closures, and operators. The file demonstrates both basic and modern JavaScript syntax such as arrow functions, IIFEs, optional chaining, and the nullish coalescing operator.

## 📂 Contents

* [Function Statement](#function-statement)
* [Function Expression](#function-expression)
* [Parameterized Function](#parameterized-function)
* [Arrow Function](#arrow-function)
* [IIFE - Immediately Invoked Function Expression](#iife---immediately-invoked-function-expression)
* [Returning Values from IIFE](#returning-values-from-iife)
* [Higher Order Function](#higher-order-function)
* [Arrow Function vs Normal Function](#arrow-function-vs-normal-function)
* [Closures](#closures)
* [Loops](#loops)

  * [For Loop](#for-loop)
  * [While Loop](#while-loop)
  * [Do-While Loop](#do-while-loop)
  * [forEach Loop](#foreach-loop)
  * [For...of Loop](#forof-loop)
  * [For...in Loop](#forin-loop)
* [Ternary Operator](#ternary-operator)
* [Nullish Coalescing Operator](#nullish-coalescing-operator)
* [Optional Chaining](#optional-chaining)
* [Switch Statement](#switch-statement)

---

## Function Statement

```js
function a(){
    console.log("i a function statement");
}
a();
```

A basic function declaration and invocation.

## Function Expression

```js
let b = function abc(){
    console.log("i am function expression");
    return "hello a";
}
b();
```

Function assigned to a variable, named or anonymous.

## Parameterized Function

```js
function add(num1, num2){
    return num1 + num2;
}
```

Demonstrates function parameters and returning a value.

## Arrow Function

```js
let c = () => {
    console.log("I am arrow function");
};
c();
```

Modern concise syntax for function expressions.

## IIFE - Immediately Invoked Function Expression

```js
(function(){
    console.log("i am immediately invoked function expression")
})();
```

Runs the function as soon as it is defined.

## Returning Values from IIFE

```js
let result = (function(){
    var rs = "jot";
    console.log("iife");
    return rs;
})();
console.log("TAKEN VALUES FROM IIFE", result);
```

Capturing a return value from an IIFE.

## Higher Order Function

```js
function xx(){
    console.log("hello from x inside y");
}
function y(fn){
    fn();
}
y(xx);
```

Functions can accept other functions as arguments.

## Arrow Function vs Normal Function

```js
const user = {
    jot: "100",
    us: function() {
        console.log(this.jot);
    },
    aw: () => {
        console.log(this.jot);
    }
}
user.us(); // '100'
user.aw(); // 'undefined' due to lexical scope of arrow function
```

Demonstrates how `this` behaves differently in arrow functions.

## Closures

```js
function welcome(name){
    return function(message){
        console.log(message, name);
    };
}
var myfunction = welcome("john");
myfunction("closure");
myfunction("jot mr");
```

Shows how inner functions retain access to outer variables.

## Loops

### For Loop

```js
for(let i = 1; i <= 10; i++){
    console.log(i);
}
```

### While Loop

```js
let ac = 1;
while(ac <= 10){
    console.log(ac);
    ac++;
}
```

### Do-While Loop

```js
let EE = 10;
do {
    console.log(EE);
    EE++;
} while(EE <= 20);
```

### forEach Loop

```js
let arr = ["jot", "simi", "sartaj", "hrshal"];
arr.forEach((element, index) => {
    console.log(`${element} at index ${index}`);
});
```

### For...of Loop

```js
for(let clr of arr){
    console.log(clr);
}
```

### For...in Loop

```js
let usr = { username: "jot", password: "123" };
for(let user in usr){
    console.log(`${user} value: ${usr[user]}`);
}
```

## Ternary Operator

```js
let x = 20;
(x < 40) ? console.log("true") : console.log("false");
```

Short-hand `if-else`.

## Nullish Coalescing Operator

```js
let username = null;
let name = username ?? "jot";
console.log(name);
```

Returns right-hand value if left-hand is `null` or `undefined`.

## Optional Chaining

```js
let animal = {
    dog: {
        name: "pugg"
    }
}
let name2 = animal.dog?.name;
console.log(name2);
```

Safely access deeply nested properties.

## Switch Statement

```js
let sw = 30;
switch(sw) {
    case 20:
    case 50:
        console.log("exact");
        break;
    default:
        console.log("not exact");
}
```

Multi-case condition checking.

---

## 🧠 conclusion

This project demonstrates key JavaScript syntax and patterns used in real-world applications. Ideal for beginners learning function types, control structures, and object behavior.


