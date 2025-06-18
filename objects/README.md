# What are Objects ?
<br>
<span class="colour" style="color:rgb(250, 250, 250)">An object can be created with figure brackets { } with an optional list of properties. A property is a \`\`\` â€œkey: valueâ€</span>

<span class="colour" style="color:rgb(250, 250, 250)">`let``Â user = { [key]name: "XYZ" [value], age: 24 };`</span>
<br>
# How can you access, modify and delete properties of an object?
<br>
Let's say we have the above object "user"

\- Access :

```
console.log(user.name);        r
console.log(user["name"]);     r
```

`- Modify :`

```
user.name = "Ashima";
```

-Delete :
<br>
```
delete user.age;
```

<span class="flex flex-row items-center leading-none" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: flex; flex-direction: row; align-items: center; line-height: 1;"><code class="lang-plaintext" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; font-family: inherit; font-size: 14px; color: rgb(221, 221, 221); font-weight: 500 !important; background: transparent; border-radius: 0px; padding: 0px; line-height: inherit; --tw-text-opacity: 1; --tw-bg-opacity: 1;"></code></span>
Q1: Deleting Function Parameter
<br>
```
const func = (function(a) {
  delete a;
  return a;
})(5);

console.log(func); // 5
```

The parameter `a` is a local variable. `delete` has no effect on local variables.

Q2: Duplicate Keys
<br>
```
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj); // { a: "three", b: "two" }
```

The last key overwrites previous ones.
Q3: Multiply Numeric Properties
<br>
```
function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
```

# Computed Properties
<br>
```
let property = "firstName";
let person = {
  [property]: "Ashima Agarwal"
};
```

# Multiword Keys
<br>
```
let user = {};
user["like the video"] = true;
console.log(user["like the video"]); // true
```

# Looping Over Objects

```
let user = { name: "Ashima", age: 24 };
for (let key in user) {
  console.log(key, user[key]);
}
```

# Object Referencing
<br>
```
let c = { greeting: 'Hey!' };
let d = c;
c.greeting = 'Hello';
console.log(d.greeting); // Hello
console.log({a:1} == {a:1}); // false
console.log({a:1} === {a:1}); // false
```

# JSON Methods
<br>
### `JSON.stringify(obj, replacer)`

`JSON.stringify` converts a JavaScript object into a JSON string.
It accepts **three arguments**:
<br>
```
JSON.stringify(value, replacer, space);
```

In your case:

* `value` is `obj`
* `replacer` is `['level', 'health']`
* `space` is not used

```
const obj = {
  level: 19,
  health: 90,
  username: 'lydiahallie'
};
console.log(JSON.stringify(obj, ['level', 'health'])); // {"level":19,"health":90}
```

#

### ðŸ“Œ What is a Replacer?

The **second argument** (replacer) can be:

1. **An Array** â€” to **filter** which keys should be included in the final string
2. **A Function** â€” to **customize** how values are converted

- - -

### ðŸ” In this case:

```
['level', 'health']
```

This tells `JSON.stringify` to **only include these two keys**.

So, the key `"username"` is **excluded** from the output.

- - -

### âœ… Final Output:

```
{"level":19,"health":90}
```

Only `"level"` and `"health"` are serialized to JSON.

- - -

## ðŸ§ª Want to include all keys?

Just remove the second argument:
<br>
```
JSON.stringify(obj);
```

# Spread Operator
<br>
```
[...'Lydia']; // ['L', 'y', 'd', 'i', 'a']

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
// { admin: true, name: "Lydia", age: 21 }
```
<br>
## Destructuring and Renaming

```
const user = { name: "Ashima", age: 24 };
const { name } = user;
console.log(name); // Ashima

const { name: myName } = { name: "Lydia" };
console.log(myName); // Lydia
```
<br>
## Rest Parameters (Function Syntax)

```
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
// ['banana', 'apple', 'orange', 'pear']
```
<br>
## Object Mutation via Function

```
function changeAgeAndReference(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}

const personObj1 = { name: 'Alex', age: 30 };
const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }
```
<br>
## Deep Copy vs Shallow Copy

### Shallow Copy

```
const user = { name: 'Jen', age: 26 };
const copy = user;
copy.age = 24;
console.log(user.age); // 24
```

### Deep Copy

```
const user = { name: "Jen", age: 26 };
const copy = JSON.parse(JSON.stringify(user));
copy.age = 24;
console.log(user.age); // 26
```
<br>
## Cloning Techniques

```
const obj = { a: 1, b: 2 };

const clone1 = Object.assign({}, obj);
const clone2 = JSON.parse(JSON.stringify(obj));
const clone3 = { ...obj };
```