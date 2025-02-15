function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately.  Here, we'll throw an error,
    // but you could also return NaN, a default value, or handle it differently 
    // based on the specific needs of your application.
    throw new Error('Arguments cannot be null.');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
//console.log(foo(null, 1)); // Throws an error
//console.log(foo(1, null)); // Throws an error
//console.log(foo(null, null)); // Throws an error