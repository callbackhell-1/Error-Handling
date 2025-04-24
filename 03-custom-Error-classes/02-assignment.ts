/**
 ✍️ Task:
Create a custom error class EmptyNameError that extends Error
Write a function greetUser(name: string) that:
Throws EmptyNameError if name is empty or just spaces
Otherwise, prints Hello, {name}
Catch and handle EmptyNameError specifically in a try-catch block
 */

//Implementation:

// custom error class
class EmptyNameError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmptyNameError';
  }
}

const greetUser = (name: string): void => {
  try {
    const inputName = name.trim();

    if (inputName.length === 0) {
      throw new EmptyNameError('Input data is empty');
    }
    console.log(`Hello, ${inputName}`);
  } catch (error: unknown) {
    if (error instanceof EmptyNameError) {
      console.log(
        'Custom error from EmptyNameError: ',
        (error as Error).message
      );
    } else {
      console.log('Unknown error', (error as Error).message);
    }
  }
};

greetUser("John");
greetUser("");
greetUser("         ");