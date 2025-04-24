# Built-In Error Types in TypeScript

- Understand the types of errors JavaScript gives you by default, and how to use or handle them in real-world scenarios.

| **Error Type**   | **When it Happens**                                           |
| ---------------- | ------------------------------------------------------------- |
| `Error`          | Generic error – used when no specific type fits               |
| `TypeError`      | When a value is not the expected type                         |
| `ReferenceError` | When trying to access a variable that hasn’t been declared    |
| `SyntaxError`    | When your code breaks JavaScript grammar                      |
| `RangeError`     | A number is outside the allowed range (e.g., `new Array(-1)`) |
| `EvalError`      | Rare – used with JavaScript’s `eval()` function               |
| `URIError`       | Malformed URI, like `decodeURIComponent('%')`                 |

## 🔢 1. The Base Class: Error

```ts
const error = new Error('Something went wrong');
console.log(error.name); // "Error"
console.log(error.message); // "Something went wrong"
```

## 💡 Example 1: TypeError

```ts
try {
  const x: any = null;
  x(); // ❌ null is not a function
} catch (error: unknown) {
  if (error instanceof TypeError) {
    console.error('Caught a TypeError:', error.message);
  }
}
```

## 💡 Example 2: ReferenceError

```ts
try {
  console.log(undeclaredVariable); // ❌ Not defined
} catch (error: unknown) {
  if (error instanceof ReferenceError) {
    console.error('Caught a ReferenceError:', error.message);
  }
}
```

## 💡 Example 3: SyntaxError (usually caught when using eval)

```ts
try {
  eval('foo bar'); // ❌ Invalid JS
} catch (error: unknown) {
  if (error instanceof SyntaxError) {
    console.error('Caught a SyntaxError:', error.message);
  }
}
```

- why error ? :
  - if we give in eval : `eval("2 + 2")` output : 4
  - `eval("console.log('Hello from eval!')");` output : Hello from eval!
  - when we do ` eval('foo bar');` , js don't know what is this syntax.

### 🚀 What is eval?

- eval() is a special function in JavaScript that:
- Takes a string and executes it as JavaScript code.
  `eval("console.log('Hello from eval!')");` output : Hello from eval!

### 🧪 Real-World Pattern

```ts
try {
  // some risky code
} catch (error: unknown) {
  if (error instanceof TypeError) {
    // handle type issues
  } else if (error instanceof ReferenceError) {
    // handle missing variables
  } else {
    // fallback for any unexpected error
  }
}
```
