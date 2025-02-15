# Unexpected behavior with null arguments in JavaScript function

This repository demonstrates a subtle bug related to type coercion when handling null arguments in a JavaScript function. The function `foo` is intended to add two numbers. However, it returns 0 when either or both arguments are null.  This might lead to unexpected results in some situations where null might represent a missing value rather than an explicit 0.

The `bug.js` file contains the buggy code, while `bugSolution.js` offers a possible solution using strict equality and handling null values appropriately.
