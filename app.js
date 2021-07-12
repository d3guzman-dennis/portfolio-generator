//1
const generatePage = require('./src/page-template.js');
const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
/* const name = profileDataArgs[0];
const github = profileDataArgs[1]; */
const [name, github] = profileDataArgs;

/* console.log(profileDataArgs);
//9.1.6
// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));/*  */
  /* };
  
  console.log('================');
  printProfileData(profileDataArgs); */

  // 9.1.6b - why return? what's the diff? why isn't it returning sum? !!!

/*   const addNums = (numOne, numTwo) => {
    console.log(numOne, numTwo);
    return numOne + numTwo;
  };

  const sum = addNums(5, 3); */ 

  

fs.writeFile('index.html', generatePage(name, github), err => { 
    if (err) throw err;
    console.log('Portfolio complete! Check out index.htm to see the output!')
});