const upperCaseAsync = (inputStr, callback) => {

  console.log("Before setiTimeout"); //1
  

  setTimeout(() =>{ // 2

    callback(inputStr.toUpperCase()) // 7
    undeclared; // triggering an error // 8
    return "Sponge Bob Return" // even if we return, it wont change anything. That value is returned to thin air
  }, 3000)


  console.log("After SetTimeout"); //3

  // return undefined; // 4
  

};

try {
 upperCaseAsync('Sponge Bob', (upperCaseName) => console.log(upperCaseName)); // 5
} catch(err) {
  console.log("Error:", err);  
}

console.log("Continue Execution"); //6 

