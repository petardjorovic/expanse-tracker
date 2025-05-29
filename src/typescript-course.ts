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

// function greet(username: string): void {
//   console.log(`Hello ${username}`);
// }

// function errorMsg(errMsg: string, errCode: number): never {
//   throw { message: errMsg, code: errCode };
// }

// console.log(greet("Petar"));
// console.log(errorMsg("Internal server error", 500));

/*****************************************************
 ********** LECTURE 39; ACCESS MODIFIERS *************
 *****************************************************/

// po default ispred svakog property i method stoji public

// class Employee {
//   constructor(
//     public empName: string,
//     private salary: number,
//     public baseLocation: string,
//     public isEligible: boolean,
//     private hikePercent: number,
//     public readonly empId: number
//   ) {}

//   getSalary() {
//     if (this.isEligible) {
//       return this.getNewSalary();
//     }
//     return this.salary;
//   }

//   private getNewSalary() {
//     return this.salary + (this.salary * this.hikePercent) / 100;
//   }
// }

// const employee1 = new Employee("Petar Djorovic", 50000, "KM", true, 10, 101);
// const employee2 = new Employee("Danica Jevremovic", 80000, "BG", true, 15, 102);
// console.log(employee1);
// console.log(employee2);
// console.log(employee1.getSalary());

/********************************************************************************
 ************ LECTURE 43; METHOD OVERRIDING & PROTECTED MODIFIER ****************
 ********************************************************************************/

// class Person {
//   name: string;
//   protected dob: string;
//   gender: string;

//   constructor(n: string, dob: string, gen: string) {
//     this.name = n;
//     this.dob = dob;
//     this.gender = gen;
//   }

//   calculateAge() {
//     console.log("Calculate age method called from within Person class");
//     return new Date().getFullYear() - new Date(this.dob).getFullYear();
//   }
// }

// let p1 = new Person("Petar", "10-24-1989", "male");

// class Employee extends Person {
//   salary: number;
//   bonus: number;

//   constructor(n: string, dob: string, gen: string, sal: number, bon: number) {
//     super(n, dob, gen);
//     this.salary = sal;
//     this.bonus = bon;
//   }

//   getSalary() {
//     return this.salary + this.bonus;
//   }
//   calculateAge(): number {
//     console.log("Calculate age method called from within Employee class");
//     return 2025 - new Date(this.dob).getFullYear();
//   }
// }

// let emp1 = new Employee("Milos", "1-1-1990", "male", 120000, 15000);

// console.log(emp1.calculateAge());
//console.log(emp1.getSalary());

/*****************************************************************
 ************ LECTURE 44; GETTER & SETTER METHODS ****************
 *****************************************************************/

// class Person {
//   name: string;
//   private _age: number | null = null;

//   constructor(n: string) {
//     this.name = n;
//   }

//   get age() {
//     if (this._age !== null) {
//       return this._age;
//     } else {
//       throw new Error("You have not set value for age yet");
//     }
//   }

//   set age(value: number) {
//     if (value > 0) {
//       this._age = value;
//     } else {
//       throw new Error("Age must be greater than 0");
//     }
//   }
// }

// const p = new Person("Petar");
// p.age = 1;
// console.log(p.age);

// class Circle {
//   private _radius: number | null = null;

//   get radius() {
//     if (this._radius !== null) {
//       return this._radius;
//     } else {
//       throw new Error("You have not set value radius yet");
//     }
//   }

//   set radius(r: number) {
//     this._radius = r;
//   }

//   //? ove diameter se zovu computed properties, jer ih dobijamao na osnovu this._radius property
//   get diameter() {
//     if (this._radius !== null) {
//       return this._radius * 2;
//     } else {
//       throw new Error("You have to set value for radius first");
//     }
//   }

//   set diameter(value: number) {
//     this._radius = value / 2;
//   }
// }

// const c = new Circle();
// c.diameter = 10;
// console.log(c.radius);
// console.log(c.diameter);

/*****************************************************************
 ************ LECTURE 45; STATIC METHODS & PROPERTIES ************
 *****************************************************************/

// class Employee {
//   public firstName: string;
//   public lastName: string;
//   public static count: number = 0;

//   constructor(fname: string, lname: string) {
//     this.firstName = fname;
//     this.lastName = lname;
//     Employee.count++;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   static sayHello() {
//     console.log("Hello");
//   }
// }

// const e1 = new Employee("Petar", "Djorovic");
// const e2 = new Employee("Petar", "Djorovic");
// Employee.sayHello();
// console.log(e1.getFullName());

/*****************************************************************
 ******************** LECTURE 46; ABSTRACT CLASS *****************
 *****************************************************************/

// abstract class Employee {
//   firstName: string;
//   lastName: string;

//   abstract getSalary(): number;

//   constructor(fn: string, ln: string) {
//     this.firstName = fn;
//     this.lastName = ln;
//   }
// }

// class PermanentEmployee extends Employee {
//   salary: number;

//   constructor(fn: string, ln: string, sal: number) {
//     super(fn, ln);
//     this.salary = sal;
//   }

//   getSalary(): number {
//     return this.salary * 12;
//   }
// }

// class ContractEmployee extends Employee {
//   hourlySalary: number;

//   constructor(fn: string, ln: string, sal: number) {
//     super(fn, ln);
//     this.hourlySalary = sal;
//   }

//   getSalary(): number {
//     return this.hourlySalary * 8 * 365;
//   }
// }

// const perEmp = new PermanentEmployee("Petar", "Djorovic", 1000);
// const conEmp = new ContractEmployee("Milos", "Markovic", 20);
// console.log(perEmp.getSalary());
// console.log(conEmp.getSalary());

/*****************************************************************
 ****** LECTURE 47; PRIVATE CONTRUCTOR & SINGLETON PATTERN *******
 *****************************************************************/

// class Person {
//   private static _instance: Person;
//   private constructor() {}

//   static getInstance() {
//     console.log(Person._instance);

//     if (Person._instance) {
//       return Person._instance;
//     }
//     Person._instance = new Person();
//     return Person._instance;
//   }
// }

// const p = Person.getInstance();
// const p2 = Person.getInstance();

// console.log(p === p2);

/**************************************************************************
 *********************** LECTURE 48; INTERFACES  **************************
 **************************************************************************/

// interface User {
//   firstName: string;
//   lastName: string;

//   greetUser(): void;

//   getFullName(): string;
// }

// class Admin implements User {
//   public firstName: string;
//   public lastName: string;

//   constructor(fn: string, ln: string) {
//     this.firstName = fn;
//     this.lastName = ln;
//   }

//   greetUser() {
//     console.log("Hello Admin: " + this.getFullName());
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Member implements User {
//   firstName: string;
//   lastName: string;

//   constructor(fn: string, ln: string) {
//     this.firstName = fn;
//     this.lastName = ln;
//   }
//   greetUser() {
//     console.log("Hello Member: " + this.getFullName());
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// function sayHello(usr: User) {
//   console.log("Hello ", usr.firstName, usr.lastName);
// }

// const admin = new Admin("Petar", "Djorovic");
// const member = new Member("Milos", "Novakovic");

// sayHello(admin);
// sayHello(member);

/**************************************************************************
 ******** LECTURE 49; READONLY & OPTIONAL PROPERTY IN INTERFACE  **********
 **************************************************************************/

// interface User {
//   firstName: string;
//   lastName: string;
//   readonly company: string;
//   location?: string;

//   greetUser(): void;
//   getFullName(): string;
// }

// class Admin implements User {
//   company: string = "Twitter";
//   location?: string | undefined;
//   constructor(public firstName: string, public lastName: string) {}

//   greetUser(): void {
//     console.log("Hello user:", this.getFullName());
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Member implements User {
//   firstName: string;
//   lastName: string;
//   company: string;
//   location?: string | undefined = "London";

//   constructor(fn: string, ln: string, com: string, loc?: string) {
//     this.firstName = fn;
//     this.lastName = ln;
//     this.company = com;
//     this.location = loc;
//   }

//   greetUser(): void {
//     console.log("Hello user:", this.getFullName());
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const a: User = new Admin("petar", "djorovic");
// const m: User = new Member("nenad", "Ilic", "Boing");
// console.log(a);
// console.log(m.location);
//* a.company = 'Yahoo'; ne moze zbog readony iz interface User

/**************************************************************************
 ******************** LECTURE 50; EXTENDING INTERFACE  ********************
 **************************************************************************/

// interface Roles {
//   getRole(): string;
// }

// interface Example {
//   someProp: number;
// }
// //* interface moze extendovati vise drugih interface
// interface User extends Roles /*, Example*/ {
//   firstName: string;
//   lastName: string;
//   location?: string;

//   greetUser(): void;

//   getFullName(): string;
// }

// //* class moze implements vise interface
// //! class ne moze extendovati vise klasa, nego samo jednu
// class Admin implements User, Example {
//   someProp: number = 12;
//   location?: string | undefined;
//   constructor(public firstName: string, public lastName: string) {}

//   greetUser(): void {
//     console.log("Hello user:", this.getFullName());
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }

//   getRole(): string {
//     return "admin";
//   }
// }

// class Member {
//   firstName: string;
//   lastName: string;
//   location?: string | undefined = "London";

//   constructor(fn: string, ln: string, loc?: string) {
//     this.firstName = fn;
//     this.lastName = ln;
//     this.location = loc;
//   }

//   greetUser(): void {
//     console.log("Hello user:", this.getFullName());
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const a = new Admin("petar", "djorovic");
// const m = new Member("nenad", "Ilic");
// console.log(a.getRole());

/**************************************************************************
 *************** LECTURE 51; INTERFACE AS FUNCTION TYPE  ******************
 **************************************************************************/

// //type sumFn = (num1: number, num2: number) => number;

// //* retko se koristi interface za function return type
// //* ali samo da se pokaze da je to moguce

// interface sumFn {
//   (num1: number, num2: number): number;
// }

// let sum: sumFn;

// sum = (n: number, m: number): number => {
//   return n + m;
// };

// console.log(sum(10, 25));

/**************************************************************************
 ************** LECTURE 52; INTERSECTION TYPE IN TYPESCRIPT  **************
 **************************************************************************/

// type stringOrNumber = string | number;

// type numberOrBoolean = number | boolean;

// //* u ovom slucaju ovo ce biti type number
// type onlyNumberType = stringOrNumber & numberOrBoolean;

// let str: stringOrNumber = "petar";
// let num1: stringOrNumber = 100;
// let bool1: numberOrBoolean = true;
// let num2: numberOrBoolean = 0.12;

// let num3: onlyNumberType = 5;

// interface Admin {
//   name: string;
//   age: number;
// }

// interface User {
//   name: string;
//   age: number;
//   role: string;
// }

// type adminUser = Admin & User;

// let usr1: adminUser = {
//   name: "Nikola",
//   age: 32,
//   role: "user",
// };

// interface Order {
//   id: number;
//   items: string[];
// }

// enum Status {
//   PENDING = "pending",
//   REJECTED = "rejected",
//   SHIPPED = "shipped",
// }

// function processOrder(order: Order & { status: Status }) {
//   console.log(order.id, order.items, order.status);
// }

// processOrder({ id: 125, items: ["item1", "item2"], status: Status.PENDING });

/**************************************************************************
 **************** LECTURE 53; TYPE GUARDS IN TYPESCRIPT  ******************
 **************************************************************************/

// type StringOrNumber = string | number;

// //* type guarding pomocu typeof operatora
// function sum(n: StringOrNumber, m: StringOrNumber) {
//   if (typeof n === "string" || typeof m === "string") {
//     return n.toString() + m.toString();
//   }
//   return n + m;
// }

// console.log(sum("pe", "tar"));
// console.log(sum(10, 65));
// console.log(sum(10, "petar"));
// console.log(sum("petar", 10));

// class Animal {
//   makeSound() {
//     console.log("Some generic animal sound");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Woof woof");
//   }
// }

// //* type guarding pomocu instanceof operatora
// function makeAnimalSound(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.makeSound();
//   }
// }

// const cat = new Animal();
// const shepard = new Dog();

// makeAnimalSound(cat);
// makeAnimalSound(shepard);

// type User = {
//   name: string;
//   email?: string;
// };

// //* type guarding pomocu in operatora
// function greetUser(usr: User) {
//   if ("email" in usr) {
//     console.log(`Helo ${usr.name}. Your email address is ${usr.email}`);
//   } else {
//     console.log(`Helo ${usr.name}`);
//   }
// }

// greetUser({ name: "Petar" });
// greetUser({ name: "Petar", email: "perodjorovic@gmail.com" });

// type Dog = { bark: () => void };
// type Cat = { meow: () => void };

// function makeSound(animal: Dog | Cat) {
//   if ("bark" in animal) {
//     animal.bark(); // TypeScript zna da je `animal` sigurno `Dog`
//   } else if ("meow" in animal) {
//     animal.meow(); // ovde je `animal` sigurno `Cat`
//   }
// }

/**************************************************************************
 ******************* LECTURE 54; DISCRIMINATED UNION  *********************
 **************************************************************************/

interface Circle {
  kind: "circle"; //* ovaj 'circle' nije vrednost nego literal type
  radius: number;
}

interface Square {
  kind: "square"; //* ovaj 'sqaure' nije vrednost nego literal type
  length: number;
}

//* ovo se onda zove dicriminated union
type Shape = Circle | Square;

function calcArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return shape.radius * 3.14 * shape.radius;
    case "square":
      return shape.length * shape.length;
  }
}

console.log(calcArea({ kind: "square", length: 12 }));
console.log(calcArea({ kind: "circle", radius: 9 }));
