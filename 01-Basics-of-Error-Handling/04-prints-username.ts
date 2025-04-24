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

console.log(printUsername(''));
console.log(printUsername('John Wick'));
