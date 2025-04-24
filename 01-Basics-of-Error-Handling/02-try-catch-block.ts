function divide(a: number, b: number): number {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    console.error('error is ', error.message);
    console.error('error is ', error.stack);
    return 0;
  }
}

divide(5, 10);
divide(6, 0);
