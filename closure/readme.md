

## 🔒 JavaScript Closure Function Example

This project demonstrates how **closures** work in JavaScript using a simple `welcome` function that returns another function.

---

### 📄 Code Example

```javascript
// Closure Function
function welcome(name) {
    var Info = function(message) {
        console.log(message + " " + name);
    };
    return Info;
}

var func = welcome("alice");
func("welcome");     // Output: welcome alice
func("hello mr.");   // Output: hello mr. alice
```

---

### 📌 What is a Closure?

A **closure** is a function that **remembers** the variables from its **lexical scope**, even when the function is executed outside of that scope.

In this example:

* The `Info` function **closes over** the `name` variable from the outer `welcome` function.
* Even after `welcome("alice")` has finished executing, the inner `Info` function still has access to the variable `name`.

---

### ✅ Output

```bash
welcome alice
hello mr. alice
```

---

### 💡 Why Use Closures?

Closures are useful for:

* Data encapsulation (hiding variables)
* Function factories
* Maintaining state between function calls

---

### 📘 Summary

* **Closures** allow inner functions to access variables from outer functions even after the outer function has returned.
* This is a powerful feature of JavaScript and forms the basis for many design patterns and advanced techniques.

---

Let me know if you'd like this saved to a file or enhanced with examples of real-world use cases (e.g., private variables or function factories).
