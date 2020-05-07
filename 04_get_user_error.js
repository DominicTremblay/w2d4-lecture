const faker = require('faker');

const getUser = (cb) => {

  const error = 'Could not get the user'; // 2

  setTimeout(() => { //3

    const user = { // 5
      userId: faker.random.uuid().substring(0, 6),
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      catchPhrase: faker.company.catchPhrase(),
    };
  
    if (error) { //6
      // error case
      cb(error, null); //7
    } else {
      // success case
      // Order is important here!
      cb(null, user);
    }

  }, 1000);

  // 4 (return undefined)

  
};

  // 1 
  getUser((err, user) => { 
    
    if(err) { //8
      console.log(err);//9
      return;//10
    }
    
    console.log(user)}
    
    );

console.log('Continue Execution...'); // 5
