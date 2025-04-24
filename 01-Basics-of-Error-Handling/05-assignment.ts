/*1. Write a function parseAge(input: string) that:
Converts a string to a number
Throws an error if it’s not a valid number or less than 0
*/
const parseAge = (input: string): void => {
  try {
    const inputDataInNumber = Number(input);
    if (isNaN(inputDataInNumber) || inputDataInNumber < 0) {
      throw new Error('This input is not a valid Number');
    }
    console.log(`Hey your age is ${inputDataInNumber}`);
  } catch (error) {
    console.log(`Invalid age`, error.message);
  }
};

parseAge('55');
parseAge('abcd');
parseAge('-5');
