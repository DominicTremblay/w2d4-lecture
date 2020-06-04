const faker = require('faker');

const getUser = (cb) => {
  
  
  setTimeout(() => {
    const error = '';
    
    if (error) {
      // error case

      cb(error, null)
    } else {
      // success case
      const user = {
        userId: faker.random.uuid().substring(0, 6),
        avatar: faker.image.avatar(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        catchPhrase: faker.company.catchPhrase(),
      };
    
      cb(null, user);
  
    }

   
  }, 1000);

  
};

getUser((err, user) => {

  if (err) {
    console.log(err);
    return; // exiting the function
  } 

  console.log(user.name)

});

console.log('Continue Execution...');
