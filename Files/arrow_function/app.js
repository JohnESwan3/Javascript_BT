// const sayHello = function () {
//   console.log('Hello');
// };

// sayHello();

// const sayHello = () => {
//   console.log('Hello');
// };

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One Line Returns
// const sayHello = () => 'Hello';

// Return object
// const sayHello = () => ({ msg: 'Hello' });

// Single param does not need paranthesis (but Prettier adds them)
// const sayHello = (name) => console.log(`Hello ${name}`);

// Multiple param needs paranthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello('John', 'Swan');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
