// What will be logged in this example?

//#region Notes
// `undefined` means a variable exists but has not been assigned a value yet.
// `null` is an intentional assignment meaning "no value".
//#endregion

//#region User Helpers
console.log("");
console.log("****** Exemple 1 ******");
console.log("");
//#endregion

let var1;
// `var1` is declared but not initialized, so its value is `undefined`.
console.log(var1);
// The type of `undefined` is the string "undefined".
console.log(typeof var1);

//#region User Helpers
console.log("");
console.log("****** Exemple 2 ******");
console.log("");
//#endregion

let var2 = null;
// `var2` is explicitly set to `null`.
console.log(var2);
// Historical JavaScript behavior: `typeof null` returns "object".
console.log(typeof var2);
