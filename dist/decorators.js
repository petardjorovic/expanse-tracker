"use strict";
/******************************************************
 ***********UNDERSTANDING DECORATORS*******************
 ******************************************************/
// function LoggerDecorator(logMsg: string) {
//   console.log("LOGGER DECORATOR FACTORY");
//   function Logger(target: Function) {
//     console.log("logger decorator");
//     //console.log(logMsg);
//   }
//   return Logger;
// }
// function Template(template: string, elementId: string) {
//   console.log("TEMPLATE DECORATOR FACTORY");
//   return function (target: any) {
//     console.log("template decorator");
//     let u = new target();
//     const domElement = document.getElementById(elementId);
//     if (domElement) {
//       domElement.innerHTML = template;
//       let h2 = domElement.querySelector("h2");
//       if (h2) {
//         h2.textContent = "Hello Mr. " + u.name;
//       }
//     }
//   };
// }
// @LoggerDecorator("This is a custom logger")
// @Template("<h2>Header dinymic</h2>", "container")
// class User {
//   name: string = "John";
//   age: number = 28;
//   constructor() {
//     console.log("User class constructor called...");
//   }
// }
//const u = new User();
/******************************************************
 ***********PROPERTY DECORATOR*******************
 ******************************************************/
// function Capitalize(target: any, propertyKey: string): any {
//   let value: string;
//   function getter() {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   }
//   function setter(newValue: string) {
//     value = newValue.toLowerCase();
//   }
//   return {
//     get: getter,
//     set: setter,
//   };
// }
// class Product {
//   @Capitalize
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }
// const p = new Product("nikon", 1500);
// console.log(p);
/******************************************************
 *****************ACCESSOR DECORATOR*******************
 ******************************************************/
// function AccessLogger(
//   target: any,
//   name: string,
//   descriptor: PropertyDescriptor
// ) {
//   let getter = descriptor.get;
//   let setter = descriptor.set;
//   descriptor.get = function () {
//     console.log(`Accessing value for property ${name}...`);
//     if (getter) {
//       return getter.call(this);
//     }
//     return undefined;
//   };
//   descriptor.set = function (value: number) {
//     console.log(`Setting value for property ${name}`);
//     if (setter) {
//       setter.call(this, value);
//     }
//   };
//   return descriptor;
// }
// class Product {
//   name: string;
//   private _price: number;
//   @AccessLogger
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     if (value > 0) {
//       this._price = value;
//     } else {
//       throw new Error("Price must be greater than 0");
//     }
//   }
//   constructor(name: string, price: number) {
//     this.name = name;
//     this._price = price;
//   }
// }
// const p = new Product("apple", 1500);
// p.price = 2000;
// console.log(p.price);
/******************************************************
 ************METHOD & PARAMETAR DECORATOR**************
 ******************************************************/
// function ParametarLogger(target: any, methodName: string, index: number) {
//   console.log(target);
//   console.log(methodName);
//   console.log(index);
//   console.log("Parametar logger");
// }
// function MethodLogger(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log(target);
//   console.log(methodName);
//   console.log(descriptor);
//   console.log("Method logger");
// }
// class Person {
//   name: string;
//   age: number;
//   @MethodLogger
//   calculateAge(@ParametarLogger dob: string, n: number) {
//     console.log("Calulating age");
//   }
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
// const p = new Person("Petar", 28);
/******************************************************
 *************WHEN A DECORATOR EXECUTES****************
 ******************************************************/
// function CLS_DECORATOR(target: any) {
//   console.log("CLASS DECORATOR CALLED!");
// }
// function PROP_DECORATOR(target: any, propertyKey: string): any {
//   console.log("PROPERTY DECORATOR CALLED!");
// }
// function ACC_DECORATOR(
//   target: any,
//   name: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("ACCESS DECORATOR CALLED!");
// }
// function PARAM_DECORATOR(target: any, paramName: string, index: number) {
//   console.log("PARAMETAR DECORATOR CALLED!");
// }
// function METHOD_DECORATOR(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("METHOD DECORATOR CALLED!");
// }
// @CLS_DECORATOR
// class Person {
//   @PROP_DECORATOR
//   name: string;
//   @METHOD_DECORATOR
//   calculateAge(@PARAM_DECORATOR dob: string) {
//     // calculate date of birth
//   }
//   constructor(n: string, a: number) {
//     this.name = n;
//   }
// }
/******************************************************
 **********RETURNING A CLASS FROM A DECORATOR**********
 ******************************************************/
// function Logger(target: new (...args: any[]) => {}): any {
//   class LoggingClass extends target {
//     static company: string = "Google";
//     constructor(...args: any[]) {
//       super(...args);
//       console.log("Logging class constructor");
//     }
//   }
//   return LoggingClass;
// }
// @Logger
// class Person {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
// }
// const p = new Person("Petar");
// console.log(p);
/******************************************************
 ***********CREATING A VALIDATION DECORATOR************
 ******************************************************/
// function required(target: any, propName: string) {
//   let propArr: string[] = [];
//   if (validateObject[target.constructor.name]) {
//     propArr = validateObject[target.constructor.name][propName]
//       ? [...validateObject[target.constructor.name][propName]]
//       : [];
//   }
//   validateObject[target.constructor.name] = {
//     ...validateObject[target.constructor.name],
//     [propName]: [...propArr, "required"],
//   };
// }
// function minLength(length: number): any {
//   return function (target: any, propName: string) {
//     let propArr: string[] = [];
//     if (validateObject[target.constructor.name]) {
//       propArr = validateObject[target.constructor.name][propName]
//         ? [...validateObject[target.constructor.name][propName]]
//         : [];
//     }
//     validateObject[target.constructor.name] = {
//       ...validateObject[target.constructor.name],
//       [propName]: [...propArr, "minLength"],
//     };
//   };
// }
// function positiveNumber(target: any, propName: string) {
//   let propArr: string[] = [];
//   if (validateObject[target.constructor.name]) {
//     propArr = validateObject[target.constructor.name][propName]
//       ? [...validateObject[target.constructor.name][propName]]
//       : [];
//   }
//   validateObject[target.constructor.name] = {
//     ...validateObject[target.constructor.name],
//     [propName]: [...propArr, "positiveNumber"],
//   };
// }
// interface IValidator {
//   [prop: string]: {
//     [propKey: string]: string[]; // ['required', 'minLength']
//   };
// }
// const validateObject: IValidator = {};
// function validate(obj: any): boolean {
//   //console.log(validateObject);
//   const validateClass = validateObject[obj.constructor.name];
//   if (!validateClass) return true;
//   let isValid: boolean = true;
//   for (let prop in validateClass) {
//     for (let elem of validateClass[prop]) {
//       switch (elem) {
//         case "required":
//           isValid = isValid && !!obj[prop];
//           break;
//         case "minLength":
//           isValid = isValid && obj[prop].length >= 3;
//           break;
//         case "positiveNumber":
//           isValid = isValid && +obj[prop] > 0;
//           break;
//       }
//     }
//   }
//   return isValid;
// }
// class User {
//   @required
//   @minLength(3)
//   username: string;
//   @positiveNumber
//   age: number;
//   constructor(uname: string, age: number) {
//     this.username = uname;
//     this.age = age;
//   }
// }
// const u1 = new User("Jonh", 25);
// const u2 = new User("Mer", 10);
// if (!validate(u2)) {
//   alert("Invalid input");
// } else {
//   console.log("User created successfully");
// }
