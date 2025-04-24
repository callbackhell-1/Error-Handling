# Error Handling

## 🧱 1. What is an Error?

- An error is something that breaks the normal flow of your program.
- JavaScript (and TypeScript) has a special way to create, throw, and handle these errors using the Error class and the try-catch block.

## 🛠 2. The Error Object

- The Error object helps us describe what went wrong. It has properties like:

  - `message`: Description of the problem
  - `name`: The type of error (e.g., Error, TypeError)
  - `stack`: List of function calls that led to the error (like a map to trace where the error happened)

```ts
const err = new Error('This is a problem.');
console.log(err.message); // Output: This is a problem.
console.log(err.name); // Output: Error
console.log(err.stack); // Output: Full stack trace
```

## 🚀 3. Throwing an Error with throw new Error()

```ts
throw new Error('Something went wrong');
```

## Explain :

- `new Error(...)` : Creates a new Error object with a custom message.
- `"Something went wrong"` : This is the message attached to the error.
- `throw` : This throws the error — it stops the current code and jumps to a catch block (if one exists).

```ts
function sayMyName(name: string) {
  if (!name) {
    throw new Error('Name is required!');
  }
  console.log('Hello, ' + name);
}

sayMyName('Alice'); // ✅ Works
sayMyName(''); // ❌ Throws error
```

## 🛡 4. Catching Errors with try-catch

- We don’t want our app to crash every time there's an error. So we "catch" them using `try-catch`.

```ts
const printUsername = (username: string): string => {
  try {
    if (username.length === 0) {
      throw new Error('username is empty');
    }
    return `Welcome, ${username}`;
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
    console.log(error);
    return '';
  }
};

console.log(printUsername('')); // error
console.log(printUsername('John Wick')); // works fine
```

## Summary :

- `new Error()` : Creates an error object with a message
- `throw` : Throws an error to stop program flow
- `try` : Runs code that might throw an error
- `catch` : Handles the error
- `finally` : Always runs, even if error happens
- `error.message` : Shows the custom message
- `error.stack` : Shows call trace (very useful for debug)
