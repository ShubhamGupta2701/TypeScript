// const num : number =1;
// console.log(num);

// Write a function which greets the user given their firstname

// const firstName: String = "Shubham";
function Greet(firstName:String){
    console.log("Hello "+firstName+", How are you ?");
}

// Greet("Shubham");

// Write a funciton to add 2 numbers 

// function AddNum(num1 :number,num2:number):string{
//     return String(num1+num2);
// }
// function AddNum(num1 :number,num2:number){
//     return String(num1+num2);
// }
function AddNum(num1 :number,num2:number):number{
    return num1+num2;
}
// const val = AddNum(2.4,3.3);
// console.log(val);
// console.log(typeof(val))


// Write a function to check wheather a user is 18+ or not

function CheckAge(age:number):boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

// console.log(CheckAge(19));

// write a function which take another functoin as argument and runs it after 1s

function RunAfter1S(fun:()=>void){
    setTimeout(fun,1000);
}

// function RunAfter1S(fun:any){ //can do this too
//     setTimeout(fun,1000);
// }

function ArgFun(){
    console.log("hi shubham");
}

// RunAfter1S(ArgFun);

// Write a functoin to check weather users age is 18+ or not in any condition print user name with it

interface User {
    name:string;
    age:number;
    email?:string;  // Optional Argument
}
function isValid(age:number):boolean{
    if(age>18){return true}
    else{return false}
}
function printName(user:User):void{
    if(isValid(user.age)){
        console.log(`${user.name} is 18+`);
    }else{
        console.log(`${user.name} is not 18+`);
    }
}

// printName({name:"shubham",age:23});

type Person = {
    name : string,
    gender : string,
    age:number,
}

function printPerson(p:Person):void{
    console.log(`Person name is : ${p.name}`)
}
const p1:Person = {
    name : "shubham",
    gender:"M",
    age:23
}
// printPerson(p1)

type Frontend ={
    react:string,
    tailwind:string
}
type Backend = {
    nodejs:string,
    mongodb :string,
}
type DevOops = {
    docker:string,
    awsServer :string
}
type FullStack = Frontend & Backend & DevOops; 
const fullstack:FullStack={
    react:"For frontend use ReactJS",
    tailwind:"use for stylesheet",
    nodejs:"use for backend",
    mongodb:"Use for NoSQL db",
    docker:"Use for Cloud computing",
    awsServer:"AWS Machine for serverless server"
} 

// console.log(fullstack);

const numArray :number[] = [4,2,5,1,3,8,0];

function findMax(n:number[]){
    numArray.sort()
    const Ans = numArray[-1];
    console.log(`Max number in the array is : ${Ans}`);
}

// console.log("Max number in the array is : " +findMax(numArray));
// findMax(numArray);

// ENUM - it make code more human understandable and readable and help user to perform some set of functions

// enum Direction{
//     UP,
//     DOWN,
//     RIGHT,
//     LEFT
// }
enum Direction{
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

function press(val : Direction){
    switch(val){
        case Direction.UP:
            console.log("Move Upword");
            break;
        case Direction.DOWN:
            console.log("Go Downward");
            break;
        case Direction.RIGHT:
            console.log("Go Right");
            break;
        case Direction.LEFT:
            console.log("Go Left");
            break;
        default:
            console.log("Press Function");
    }
}

// press(Direction.UP);
