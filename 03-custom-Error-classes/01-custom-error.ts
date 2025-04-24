class InvalidAgeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidAgeError';
  }
}

const validateAge = (input: string): void => {
  try {
    const age = Number(input);

    if (isNaN(age) || age < 0) {
      throw new InvalidAgeError('Invalid age');
    }
    console.log('Your age is valid', age);
  } catch (error: unknown) {
    //if (error instanceof InvalidAgeError) {
    console.log('Custom error : ', (error as Error).message);
    // } else {
    //   console.log('Some other error:', (error as Error).message);
    // }
  }
};

validateAge('18'); // correct
validateAge('42'); // correct
validateAge('0');
validateAge('adc');
validateAge('undefined');
