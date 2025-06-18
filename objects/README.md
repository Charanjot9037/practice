 
# JavaScript Object and Array Manipulation

This project demonstrates basic to intermediate JavaScript concepts including object manipulation, array operations (`map`, `reduce`, `filter`), spread/rest operators, computed properties, destructuring, and object mutation via functions.

## 🔸 Object Operations

### 1. Creating an Object
```js
const user = {
    username: "jot",
    age: 19,
    class: "b.tech"
};
````

### 2. Accessing Object Data

```js
console.log(user.username);
for (let key in user) {
    console.log(`${key} value:${user[key]}`);
}
```

### 3. Deleting a Key

```js
delete user.class;
```

### 4. Adding a Key

```js
user.lastname = "singh";
```

### 5. Modifying a Key

```js
user.lastname = "s2";
```

### 6. Handling Duplicate Keys

```js
user.username = "user 2";
```

## 🔸 Array Operations

### 1. Using `map` to Multiply Each Value by 10

```js
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(num => num * 10);
```

### 2. Using `reduce` to Sum Array Elements

```js
const newAr = numbers.reduce((acc, element) => acc + element);
```

### 3. Using `filter` to Return Elements at Even Indexes

```js
const age = ["10", "20", "30"];
let age2 = age.filter((element, index) => index % 2 === 0);
```

## 🔸 Advanced Object Features

### 1. Computed Properties

```js
let property = "user";
let person = { 
    [property]: "charanjot singh"
};
```

### 2. Multi-word Keys

```js
let user1 = {};
user1["like the video"] = true;
```

### 3. Looping Through Object

```js
let user3 = { name: "jot", age: 20 };
for (let key in user3) {
    console.log(`${key}: ${user3[key]}`);
}
```

### 4. JSON Stringify

```js
let jsn = JSON.stringify("hello");
```

## 🔸 Spread and Rest Operators

### 1. Spread in Arrays

```js
let ar1 = [1, 2];
let ar2 = [...ar1, 3, 4];
```

### 2. Rest Parameters in Functions

```js
function sum(...args) {
    return args.reduce((acc, element) => acc + element);
}
```

## 🔸 Destructuring and Renaming

### 1. Destructuring

```js
const user5 = { name: "cjs", age: 20 };
const { name } = user5;
```

### 2. Renaming During Destructuring

```js
const { name: cjs } = { name: "jot" };
```

## 🔸 Object Mutation via Function

```js
function changeAgeAndReference(person) {
    person.age = 25; // This changes original object
    person = { name: 'John', age: 50 }; // This is a new reference
    return person;
}

const personObj1 = { name: 'Alex', age: 30 };
const personObj2 = changeAgeAndReference(personObj1);
```

* `personObj1` is mutated to `{ name: 'Alex', age: 25 }`
* `personObj2` is a new object `{ name: 'John', age: 50 }`

🔸 Function Context and Borrowing Methods
### 1. this Keyword in Method Context
```js
const obj = {
    a: 10,
    x: function () {
        console.log(this);     // Logs the obj itself
        console.log(this.a);   // Logs 10
    },
};
obj.x();
```
### 2. Function Borrowing with call, apply, and bind

```js
let printname = function(loc) {
    console.log(this.name + " from " + loc);
};

let nm1 = { name: "js singh", age: 22 };
let nm2 = { name: "sk singh", age: 24 };
```
### using call
## it is called automatically
```js
printname.call(nm2, "call");
```
### Using apply (arguments as array)
# it is called automatically
# arguments are in array.
```js
printname.call(nm2, ["apply"]);
```
### Using bind (returns a function)
```js
let prtname = printname.bind(nm1, "bind");
prtname();
```
# Executes later with bound context and arguments,called by programmer
✅ Summary
This script serves as a helpful reference for:

Manipulating objects and arrays

Using ES6+ features (spread, rest, destructuringgit)

Understanding object references and mutation

Applying functional array methods like map, reduce, and filter

Mastering the this keyword and function borrowing with call, apply, and bind

