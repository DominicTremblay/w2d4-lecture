const numbers = [1, 2, 3, 4, 5];

// const two = numbers[1];
// const five = numbers[4];

// const [one, two, three, four, five]  = numbers;

const [one, ...overOne] = numbers;

console.log({ one });
console.log({ overOne });

const movies = {
  title: "Shotgun",
  runtime: 159
}

// const title = movies.title;
// const runtime = movies.runtime;

const{title,runtime} = movies;

console.log(title, runtime)