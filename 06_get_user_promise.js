const faker = require('faker')



const getUser = () => {
  // Executor Function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = '';

      if (error) {
        reject(error);
      } else {
         // success case

         const user = {
          userId: faker.random.uuid().substring(0,6),
          avatar: faker.image.avatar(),
          name: faker.name.findName(),
          email: faker.internet.email(),
          catchPhrase: faker.company.catchPhrase(),
        }

        resolve(user);
      }

     
    }, 2000);
  });
};

// Consuming the Promise

getUser()
  .then((result) => {
    // success case

    console.log(result);
  })
  .catch((err) => {
    // error case
    console.log(err);
  });

console.log('Continue executing');
