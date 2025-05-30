"use strict";
/*************************************
 * LECTURE 3; VARIABLES IN TYPESCRIPT
 **************************************/
function updateUserSettings(partialSettings) {
    console.log("Updating:", partialSettings);
}
const user = {
    username: "Pero",
    email: "perodjorovic@gmail.com",
    darkMode: true,
    language: "en",
};
//user.darkMode = false; //* ovo ne moze zbog Readonly<> generic-a
const newSettings = {
    darkMode: true,
    language: "en",
};
updateUserSettings(newSettings);
let names = ["milos", "petar", "milica", "ivana"];
//names.push("janko"); //* ovo ne moze zbog Readonly generic-a
console.log(names);
let m = {
    email: "example@email.com",
};
