//#region Notes: Hoisting in JavaScript
// Hoisting means declarations are moved to the top of their scope during compilation.
// - var: declaration is hoisted and initialized with undefined.
// - let/const: declaration is hoisted, but not initialized (Temporal Dead Zone).
//   Accessing them before declaration throws ReferenceError.
// - function declarations: fully hoisted, so they can be called before their definition.
// - function expressions (especially with let/const): follow variable hoisting rules.
//#endregion

//#region User Helpers
console.log("");
console.log("****** Exemple 1 ******");
console.log("");
//#endregion

//Q1: What will be logged here?
// Throws ReferenceError because `foo` was never declared before use.
console.log(foo);
foo = 1;

//#region User Helpers
console.log("");
console.log("****** Exemple 2 ******");
console.log("");
//#endregion

//Q2: What will be logged here?
// Logs `undefined` because `var foo` is hoisted and initialized with `undefined`.
// The assignment to `2` happens after the log.
console.log(foo);
var foo = 2;

//#region User Helpers
console.log("");
console.log("****** Exemple 3 ******");
console.log("");
//#endregion

//Q3: What will be logged here?
// Logs `3` because `foo` is declared first, then assigned, then logged.
var foo;
foo = 3;
console.log(foo);
