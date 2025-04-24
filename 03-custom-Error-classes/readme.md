# Custom Error Classes

- Learn how to create your own error types using classes in TypeScript, so you can:
  - Write more descriptive and reusable errors
  - Handle specific errors in different ways
  - Improve debugging and logging

## 🧠 Why Custom Errors?

- Imagine these logs:

```ts
throw new Error('Invalid input');
throw new Error('Invalid input');
```

- They look the same — but what if one is a validation error and the other is a permission error?

- With custom errors, you can distinguish like:

```ts
throw new ValidationError('Invalid input format');
throw new PermissionError('You are not allowed to do this');
```

## ✅ Basic Structure

```ts
class MyCustomError extends Error {
  constructor(message: string) {
    super(message); // Pass message to Error constructor
    this.name = 'MyCustomError'; // Set custom name
  }
}
```

- `super(...)` : Calls the parent class constructor, and passes your custom message to it.
- `this.name` Sets the name/type of the custom error
