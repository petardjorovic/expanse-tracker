/*************************************
 * LECTURE 3; VARIABLES IN TYPESCRIPT
 **************************************/

// let num = 100;
// let Num = 100000;

// const str = "Hello, World";

/*************************************
 * LECTURE 4; DATATYPES IN TYPESCRIPT
 **************************************/

//1. STRING DATATYPE
// const str1 = "This is a string using ${str1} single quotes";
// const str2 = "This is a string using duoble quotes";
// const str3 = `This is a string created using back ticks ${str2}
//                 and this is another line`;

// console.log(str1);
// console.log(str3);

//2. NUMBER TYPE
// let num = 12; // in memory is saved as floating 12.0
// const pi = 3.14;

//2. BOOLEAN TYPE
// let isEligible = true;
// let isEqual = false;

// falsy values: 0, null, undefined, ""

// console.log(Boolean(0)); // false
// console.log(Boolean(100)); // true

// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true

// console.log(Boolean(null)); // false
// console.log(Boolean("Hello")); // true

// console.log(Boolean(undefined)); // false
// console.log(Boolean(150)); // true

// let isGreater = 10 < 9;
// console.log(isGreater);

/***********************************************
 * LECTURE 5; TYPE ASSINGNMENT & TYPE INFERENCE
 ***********************************************/

// function sum(num1: number, num2: number, isPrint: boolean, msg: string) {
//   if (isPrint) {
//     let sum = num1 + num2;
//     console.log(msg + " " + sum);
//   }
//   return num1 + num2;
// }

// let n1: number = 12;
// n1 = 0.12;

// let n2 = 10;

// let str = "Hello";

// console.log(sum(12, 13, true, "Sum is equal"));

/***********************************************
 * LECTURE 6; OBJECT TYPE IN TYPESCRIPT
 ***********************************************/

// let person = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "Kosovska",
//     number: 3,
//     city: "Beograd",
//   },
// };

// person = {
//   address: {
//     number: 25,
//     city: "Nis",
//     street: "Bircaninova",
//   },
//   name: "Milos",
//   age: 12,
// };

// console.log(person["address"].city);

/***********************************************
 * LECTURE 7; ARRAY TYPE IN TYPESCRIPT
 ***********************************************/

// let info: (string | number | boolean)[] = ["Petar", "Milos", 100, false];

// let birthyear = [1989, 1991, 2001];

// let names: string[] = [];

// names.push("Petar");

// console.log(names[0]);

/***********************************************
 * LECTURE 8; TUPLES IN TYPESCRIPT
 ***********************************************/
// Tuple is an array that has fixed length &
// predefined index position and type for every element
//let employee: [number, string, number, boolean] = [123, "Petar", 120000, true];

// Postoji izuzetak, mozes pushovati i tuple i elemente koji ne pripadaju tuple
// i neces dobiti nikakvu gresku. Dakle mozes raditi metode nad tuple-om i nema greske
// employee.push("nenad");
// employee.pop();
// console.log(employee);

/***********************************************
 * LECTURE 9; ENUMS IN TYPESCRIPT
 ***********************************************/

// enum Roles {
//   ADMIN, // default value is 0
//   READ_ONLY, // default value is 1
//   WRITE_ONLY, // default value is 2
//   READ_WRITE, // default value is 3
// }

// // moze im se dodeliti i neka vrednost
// enum Gender {
//   male = "male",
//   female = "female",
// }

// type User = {
//   name: string;
//   age: number;
//   gender: Gender;
//   role: Roles;
// };

// const user: User = {
//   name: "Petar",
//   age: 35,
//   gender: Gender.male,
//   role: Roles.ADMIN,
// };

// if (user.role === Roles.ADMIN) {
//   console.log("This user is an admin");
// }

/***********************************************
 * LECTURE 10; ANY TYPE IN TYPESCRIPT
 ***********************************************/

// let dynamicData: any;
// dynamicData = 100;
// dynamicData = ["petar", 12];
// dynamicData = true;

// let info: any[];

// info = ["Vanja", false, 1.5];

// let userName; // by default, if you don't set a type, the type is any
// console.log(typeof userName); // ako je type any ili nisi dodelio type (znaci any po default-u) ovde dobijas type undefined
// console.log(userName); // i vrednost je undefined

/***********************************************
 * LECTURE 11; UNION TYPE IN TYPESCRIPT
 ***********************************************/
// let user: { name: string; age: number } | null = null;

// function getUser() {
//   const uname = "Petar";
//   const uage = 35;
//   user = { name: uname, age: uage };
//   return user;
// }

// console.log(getUser());

// function getServerResponse(msg: string, code: number | string) {
//   if (typeof code === "string") {
//     return `${msg}. Status code is ${code.trim()}`;
//   } else {
//     return `${msg}. Status code is ${code}`;
//   }
// }

// console.log(getServerResponse("Request was successfull", 200));
// console.log(getServerResponse("Request was failed", "400"));
// console.log(getServerResponse("Request was failed", " 400"));

/***********************************************
 * LECTURE 12; LITERAL TYPE IN TYPESCRIPT
 ***********************************************/

// type roles = "admin" | "read" | "write"; // literal type

// const str = "Hello World"; // ako je const variabla onda je literal type
// let str2 = "Some string"; // ako je let variabla onda je string type

// str2 = "Hello"; // ovo je type string i bilo koji string moze biti vrednost

// let str3: "new string"; // ovako se kreira literal type kad je let variabla

// str3 = "new string"; // samo ova vrednost je validna

// function roleMessage(role: "admin" | "read" | "write") {
//   switch (role) {
//     case "admin":
//       console.log("You have admin permission");
//       break;
//     case "read":
//       console.log("You have only read permission");
//       break;
//     case "write":
//       console.log("You have only write permission");
//       break;
//     default:
//       console.log("Unknonwn role entered");
//   }
// }

// roleMessage("admin");

/*****************************************************
 * LECTURE 13; UNDERSTANDING TYPE ALIAS OR CUSTOM TYPE
 *****************************************************/

// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// function getFullName(user: User) {
//   return user.firstName + " " + user.lastName;
// }

// function isEligibleForVoting(user: User) {
//   return user.age >= 18;
// }

// const u1 = {
//   firstName: "Petar",
//   lastName: "Djorovic",
//   age: 35,
// };

// console.log(getFullName(u1));
// console.log(isEligibleForVoting(u1));

// type StringOrNumber = number | string;

// function getServerResponse(msg: string, code: StringOrNumber) {
//   if (typeof code === "string") {
//     return `${msg}. Status code is ${code.trim()}`;
//   } else {
//     return `${msg}. Status code is ${code}`;
//   }
// }

// console.log(getServerResponse("Request was successfull", 200));
// console.log(getServerResponse("Request was failed", "400"));

// type RoleType = "admin" | "read" | "write";

// function roleMessage(role: RoleType) {
//   switch (role) {
//     case "admin":
//       console.log("You have admin permission");
//       break;
//     case "read":
//       console.log("You have only read permission");
//       break;
//     case "write":
//       console.log("You have only write permission");
//       break;
//     default:
//       console.log("Unknonwn role entered");
//   }
// }

// roleMessage("admin");

/*****************************************************
 * LECTURE 14; FUNCTION RETURN TYPE
 *****************************************************/

// function addition(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// console.log(addition(1, 6));

/*****************************************************
 * LECTURE 15; FUNCTION AS TYPE
 *****************************************************/

// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// function greetUser(user: User): void {
//   console.log("Hello user", user.firstName);
// }

// function addition(n1: number, n2: number) {
//   return n1 + n2;
// }

// function isEligible(usr: User) {
//   console.log(usr.age >= 18);
// }

// const usr1 = {
//   firstName: "Petar",
//   lastName: "Djorovic",
//   age: 35,
// };

// let greet: (u: User) => void;

// greet = greetUser;
// greet = isEligible;

// greet(usr1);

/*****************************************************
 * LECTURE 16; FUNCTION TYPE FOR CALLBACK
 *****************************************************/

// function sum(n1: number, n2: number) {
//   return n1 + n2;
// }

// function addition(n1: number, n2: number) {
//   console.log(n1 + n2);
// }

// let getSum: (n: number, m: number) => number;

// getSum = sum; // works

// function getResult(
//   n1: number,
//   n2: number,
//   print: (msg: string, res: number) => void
// ) {
//   let result = n1 + n2;
//   print("Sum is", result);
// }

// function display(msg: string, res: number) {
//   console.log(msg + ": " + res);
// }

// getResult(10, 25, display);

/*****************************************************
 * LECTURE 17; UNKNOWN TYPE IN TYPESCRIPT
 *****************************************************/
//// type any is asingnable to any type of variable
//// unknown type je restriktivniji od any
// let inputVal: unknown;
// let username: string = "Something";

// inputVal = 100;
// inputVal = "Hello";

// if (typeof inputVal === "string") {
//   username = inputVal;
// }

// console.log(username);

/*****************************************************
 * LECTURE 18; NEVER TYPE IN TYPESCRIPT
 *****************************************************/

// function return type never se koristi kad neka funkcija ne vraca nista
// nego baca gresku, throw new Error ili neki CustomError object

function greet(username: string): void {
  console.log(`Hello ${username}`);
}

function errorMsg(errMsg: string, errCode: number): never {
  throw { message: errMsg, code: errCode };
}

console.log(greet("Petar"));
console.log(errorMsg("Internal server error", 500));
