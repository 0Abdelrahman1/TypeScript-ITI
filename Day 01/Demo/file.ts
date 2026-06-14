class Test{}
/**
 * string
 * number
 * boolean
 * 
 */
let a1:number = 1
a1=2
// a1=true
console.log(a1)
// let a2
// a2 = 1
// a2 = true
// a2 = "test"

let a2 = "hello"
function concate(arg1:any,arg2:any){
    return arg1+arg2
    // return 5
}
let a3 = " world"
let a4:string = concate(1,"2")
console.log(a4)

let x = 5
function check(arg:number):boolean|undefined{
    if(arg>2){
        return true
    }
    // return undefined
}
// console.log(check(0))

// let arr:(string|number)[]
// let arr:number[]|string[]
let arr:number[]
arr = [1,2,3]
// arr = 6
// arr = ["str"]
// arr = [1,2,"dsf"]
// arr=5

arr.forEach(elem=>{
    console.log(elem)
})


const user1 = {
    name:'ahmed',
    age:20,
    courses:["C#","JS"]
}
type myUser = {name:string,age:number,courses:string[]}
function printUser(user:myUser){
    console.log(user.name)
}
const user2={
    name:55,
    age:20,
    courses:["JS"]
}
printUser(user1)
// printUser(user2)
console.log(user1)
user1.age = 5
// console.log(user1.xyz)
// user1.address = "123"


// function add(arg1:number|string,arg2:number|string){
//     if(typeof arg1=="number"&&typeof arg2=="number")
//         return arg1+arg2
//     if(typeof arg1 == "string" &&typeof arg2=="string")
//         return arg1+arg2
// }
function add(arg1:string,arg2:string):string
function add(arg1:number,arg2:number):number
function add(arg1:boolean,arg2:boolean):number
function add(arg1:any,arg2:any){
    return arg1+arg2
}

console.log(add(1,2))//3
console.log(add(true,false))//3
// console.log(add(1,"2"))//undefined
console.log(add("1","2"))//12
function myConcate(arg1:string,arg2:string){
    return arg1+arg2
}
console.log(myConcate('str','test'))

type myData = number|string|number[]
let y:myData=5

interface IUser{
     name:string
    readonly age:number
    courses?:string[]
}

interface IStudent extends IUser{
    grade:number
}
let u2:IStudent={
    age:20,
    name:"ahmed",
    grade:5,
    // courses:["JS"]
}
// u2.age = 1
console.log(u2.courses)
let u1:IUser={
    age:10,
    courses:["JS"]
    ,name:'ahmed',
    // address:'123st'
}

enum Colors{
    red="red",
    green="green",
    blue="blue"
}
let bgColor:Colors=Colors.red
// bgColor = 5
bgColor = "blue" as Colors
console.log(bgColor)

/**Generics */
function firstElement(arr:number[]){
    return arr[0]
}
function firstElement1(arr:string[]){
    return arr[0]
}
let arr1 = [1,2,3,4,5]
let arr6 = [1,2,3,0,0,0,0,0,0]
let arr2=["s","d","z"]
console.log(firstElement(arr1))
console.log(firstElement1(arr2))

function firstElement_Generic<T>(arr:T[]):T{
    return arr[0]
}
console.log(firstElement_Generic(arr1))
console.log(firstElement_Generic<string>(arr2))
console.log(firstElement_Generic<boolean>([true,false]))

function MyFun<I,O>(arr:I[],func:(arg:I)=>O){
    return arr.map(func)
}
const arr4 = ["1","3","8"]
const arr5 = MyFun(arr4,n=>parseInt(n))
console.log(arr5)

interface isSized{
    length:number
}
function lengthComparison<Type extends isSized>(a:Type,b:Type){
    if(a.length>b.length){
        return a
    }
    return b
}

console.log(lengthComparison(arr1,arr6))
// console.log(lengthComparison(1,2))
console.log(lengthComparison("hello","world"))

interface IEmployee{
    name:string
    salary:number
    age?:number
}
let emp1:Readonly<IEmployee>={
    name:'ahmed',
    // age:20,
    salary:55
}
console.log(emp1)
console.log(emp1.age)
// emp1.age = 5
let emp2:Partial<IEmployee>={
    age:20,
    name:'',
    salary:5
}
// emp1.name="xyz"
emp2.name="test"
emp2.age=5

let emp3:Required<IEmployee>={
    name:'',
    salary:0,
    age:0
}

type student = Pick<IEmployee,('name'|'age')>
let std1:student={
    name:'',
    // salary:0//error
}
let std2:Omit<IEmployee,'name'>={
    salary:0,
    // name:'dfdf'//error
}

type MyColors = "red"|"green"|"blue"|"yellow"
// let fColor:MyColors = "red"
// fColor ="green"

type sColor = Extract<MyColors,("red"|"blue")>
let fColor:sColor="blue"
let testColor:Exclude<MyColors,"red">="yellow"