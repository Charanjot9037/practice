
## Function Expression vs Arrow Function in JavaScript

This simple project demonstrates two different ways to define functions in JavaScript: using a **function expression** and an **arrow function**.

### 📄 Code Example

```javascript
// Function Expression
let b = function() {
    console.log("function expression");
}
b(); // Output: function expression

// Arrow Function
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3)); // Output: 5
```

---

### 📌 Difference Between Function Expression and Arrow Function

| Feature                | Function Expression            | Arrow Function                                               |
| ---------------------- | ------------------------------ | ------------------------------------------------------------ |
| **Syntax**             | `let fn = function() {}`       | `const fn = () => {}`                                        |
| **`this` Binding**     | Has its own `this`             | Does **not** have its own `this`, inherits from parent scope |
| **`arguments` object** | Has its own `arguments` object | Does **not** have `arguments` object                         |
| **Usage in Methods**   | Recommended for object methods | Not suitable for object methods that use `this`              |
| **Concise Syntax**     | More verbose                   | More concise, especially for one-liners                      |
| **Constructor Usage**  | Can be used as constructors    | **Cannot** be used as constructors (`new` will throw)        |

---

### 💡 Summary

* Use **function expressions** when you need your own `this`, `arguments`, or plan to use the function as a constructor.
* Use **arrow functions** for shorter, cleaner functions especially in callbacks or functions that don’t need their own context.


