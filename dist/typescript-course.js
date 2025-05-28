"use strict";
/*************************************
 * LECTURE 3; VARIABLES IN TYPESCRIPT
 **************************************/
class Admin {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    greetUser() {
        console.log("Hello Admin: " + this.getFullName());
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Member {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    greetUser() {
        console.log("Hello Member: " + this.getFullName());
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
function sayHello(usr) {
    console.log("Hello ", usr.firstName, usr.lastName);
}
const admin = new Admin("Petar", "Djorovic");
const member = new Member("Milos", "Novakovic");
sayHello(admin);
sayHello(member);
