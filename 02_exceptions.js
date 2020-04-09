const printName = name => {

  console.log(name.toUpperCase());

  // simulating an error that been thrown
  throw new Error("Bob you're not allowed!");

}

// Exception handling
try {
  printName('Sponge Bob');
} catch(err) {
  console.log("Error:", err.message);
} 

console.log("Continue Execution");

