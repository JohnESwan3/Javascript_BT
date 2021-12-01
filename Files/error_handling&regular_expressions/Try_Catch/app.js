const user = { email: 'jdoe@gmail.com' };

try {
  // Produce a RefferenceError
  //   myFunction();
  // Produce a TypeError
  // Produce a TypeError
  // null.myFunction();
  // SyntaxError
  // eval('Hello World);
  // URIError
  //   decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
  console.log(`User Error: ${e.message}`);
  //   console.log(`${e.name}: ITS NULL STUPID`);
  //   console.log(e.message);
  //   console.log(e.name);
  //   console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues... ');
