//1
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
//9.1.6
// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
  };
  
  console.log('================');
  printProfileData(profileDataArgs);

  // 9.1.6b - why return? what's the diff? why isn't it returning sum? !!!

/*   const addNums = (numOne, numTwo) => {
    console.log(numOne, numTwo);
    return numOne + numTwo;
  };

  const sum = addNums(5, 3); */