const processOrder = (customer, callback) => {
  const time = Math.floor(Math.random() * 5000); // 2

  // Cooking the burger takes time

  setTimeout(() =>{ //3

    callback(`${customer}'s big juicy burger is ready!. it took ${time} ms`) // 6

  }, time);


  console.log(`Let's start cooking!`); //4
};

const result = processOrder('Sponge Bob', (msg) => console.log(msg)); //1

console.log('Sponge Bob waits for his burger...'); //5
