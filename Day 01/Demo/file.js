"use strict";
class Test {
}
/**
 * string
 * number
 * boolean
 *
 */
let a1 = 1;
a1 = 2;
// a1=true
console.log(a1);
// let a2
// a2 = 1
// a2 = true
// a2 = "test"
let a2 = "hello";
function concate(arg1, arg2) {
    return arg1 + arg2;
    // return 5
}
let a3 = " world";
let a4 = concate(1, "2");
console.log(a4);
let x = 5;
function check(arg) {
    if (arg > 2) {
        return true;
    }
    // return undefined
}
// console.log(check(0))
// let arr:(string|number)[]
// let arr:number[]|string[]
let arr;
arr = [1, 2, 3];
// arr = 6
// arr = ["str"]
// arr = [1,2,"dsf"]
// arr=5
arr.forEach(elem => {
    console.log(elem);
});
const user1 = {
    name: 'ahmed',
    age: 20,
    courses: ["C#", "JS"]
};
function printUser(user) {
    console.log(user.name);
}
const user2 = {
    name: 55,
    age: 20,
    courses: ["JS"]
};
printUser(user1);
// printUser(user2)
console.log(user1);
user1.age = 5;
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(1, 2)); //3
console.log(add(true, false)); //3
// console.log(add(1,"2"))//undefined
console.log(add("1", "2")); //12
function myConcate(arg1, arg2) {
    return arg1 + arg2;
}
console.log(myConcate('str', 'test'));
let y = 5;
let u2 = {
    age: 20,
    name: "ahmed",
    grade: 5,
    // courses:["JS"]
};
// u2.age = 1
console.log(u2.courses);
let u1 = {
    age: 10,
    courses: ["JS"],
    name: 'ahmed',
    // address:'123st'
};
var Colors;
(function (Colors) {
    Colors["red"] = "red";
    Colors["green"] = "green";
    Colors["blue"] = "blue";
})(Colors || (Colors = {}));
let bgColor = Colors.red;
// bgColor = 5
bgColor = "blue";
console.log(bgColor);
/**Generics */
function firstElement(arr) {
    return arr[0];
}
function firstElement1(arr) {
    return arr[0];
}
let arr1 = [1, 2, 3, 4, 5];
let arr6 = [1, 2, 3, 0, 0, 0, 0, 0, 0];
let arr2 = ["s", "d", "z"];
console.log(firstElement(arr1));
console.log(firstElement1(arr2));
function firstElement_Generic(arr) {
    return arr[0];
}
console.log(firstElement_Generic(arr1));
console.log(firstElement_Generic(arr2));
console.log(firstElement_Generic([true, false]));
function MyFun(arr, func) {
    return arr.map(func);
}
const arr4 = ["1", "3", "8"];
const arr5 = MyFun(arr4, n => parseInt(n));
console.log(arr5);
function lengthComparison(a, b) {
    if (a.length > b.length) {
        return a;
    }
    return b;
}
console.log(lengthComparison(arr1, arr6));
// console.log(lengthComparison(1,2))
console.log(lengthComparison("hello", "world"));
let emp1 = {
    name: 'ahmed',
    // age:20,
    salary: 55
};
console.log(emp1);
console.log(emp1.age);
// emp1.age = 5
let emp2 = {
    age: 20,
    name: '',
    salary: 5
};
// emp1.name="xyz"
emp2.name = "test";
emp2.age = 5;
let emp3 = {
    name: '',
    salary: 0,
    age: 0
};
let std1 = {
    name: '',
    // salary:0//error
};
let std2 = {
    salary: 0,
    // name:'dfdf'//error
};
let fColor = "blue";
let testColor = "yellow";
