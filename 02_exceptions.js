const printName = (name) => {
  console.log('Name:', name);
  // What happens if this function is throwing an error?
  throw new Error("Error with your name!")
};

try {
  printName('Sponge Bob');
} catch(err) {
  console.log(err.message);
}

// this is never executed!
console.log("Continuing execution!");
