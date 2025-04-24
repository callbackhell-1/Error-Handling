function stringToNumber(data: string): number {
  try {
    const dataInNumber = Number(data);
    if (isNaN(dataInNumber)) {
      throw new Error("this data can't be converted to number");
    }
    return dataInNumber;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

console.log(stringToNumber('125'));
console.log(stringToNumber('abc'));

/**
 const data = '125';
const dataInNumber = Number(data); // 125
isNaN(dataInNumber); // false ✅


const data = 'abc';
const dataInNumber = Number(data); // NaN
isNaN(dataInNumber); // true ❌

*/
