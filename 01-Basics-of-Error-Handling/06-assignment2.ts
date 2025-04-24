/**
 * Practice Problem 2: Smart Divider
Write a function smartDivide(a: string, b: string) that:
  Converts both inputs to numbers. 
   Throws an error if either input is not a valid number.  
   Throws an error if the second number (b) is 0 (to avoid division by zero).  If all is good, it should print the result of a / b.
    Catch and display the error message. 
    Always log "Calculation complete" in the finally block.
 */

const smartDivide = (a: string, b: string) => {
  try {
    const inputOne = Number(a);
    const inputTwo = Number(b);
    if (isNaN(inputOne) || isNaN(inputTwo) || inputTwo === 0) {
      throw new Error('Not a valid Number');
    }
    console.log(inputOne / inputTwo);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Something went wrong');
    }
  } finally {
    console.log('Calculation complete');
  }
};

smartDivide('10', '2'); // ✅ 10 / 2 = 5
smartDivide('abc', '2'); // ❌ Invalid number input
smartDivide('5', '0'); // ❌ Division by zero
smartDivide('4', 'xyz'); // ❌ Invalid number input
