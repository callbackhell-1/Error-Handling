/**
 Problem: Multi Error Catcher
Create a function multiErrorTester(input: string) that:
Tries to:
Convert input to number
Access a missing variable
Call a non-function value
Use try-catch to:
Detect if it was a TypeError, ReferenceError, or other
Print the error type and message
 */

const multiErrorTester = (input: string): void => {
  const inputInNumber = Number(input);

  try {
    eval("console.log(x)");
  } catch (error: unknown) {
    if (error instanceof ReferenceError) {
      console.log('Some variable is not defined');
    }
  }

  try {
    (input as any)();
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.log('This is not a valid type');
    }
  }
};

multiErrorTester('abc');
