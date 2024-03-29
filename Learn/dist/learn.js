"use strict";
function Greet(firstName) {
    console.log("Hello " + firstName + ", How are you ?");
}
function AddNum(num1, num2) {
    return num1 + num2;
}
function CheckAge(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function RunAfter1S(fun) {
    setTimeout(fun, 1000);
}
function ArgFun() {
    console.log("hi shubham");
}
function isValid(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function printName(user) {
    if (isValid(user.age)) {
        console.log(`${user.name} is 18+`);
    }
    else {
        console.log(`${user.name} is not 18+`);
    }
}
function printPerson(p) {
    console.log(`Person name is : ${p.name}`);
}
const p1 = {
    name: "shubham",
    gender: "M",
    age: 23
};
const fullstack = {
    react: "For frontend use ReactJS",
    tailwind: "use for stylesheet",
    nodejs: "use for backend",
    mongodb: "Use for NoSQL db",
    docker: "Use for Cloud computing",
    awsServer: "AWS Machine for serverless server"
};
const numArray = [4, 2, 5, 1, 3, 8, 0];
function findMax(n) {
    numArray.sort();
    const Ans = numArray[-1];
    console.log(`Max number in the array is : ${Ans}`);
}
findMax(numArray);
