const printName = name => {

  console.log("Name:", name);

  undeclared; // triggering an error

}

// printName('Sponge Bob'); // our code will crash

// Exception handing allows for graceful execution without crashing our app

try {
  printName('SpongeBob')
} catch(err) {
  console.log("Error:", err.message);
  
}

console.log('Execution continues');
