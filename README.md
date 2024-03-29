# TypeScript

- It provide type boundation to JavaScript
- Typescript itself never compiles, it just compile to js and then run on browser or node
- It contain 2 json file by default (package.json and tsconfig.json)
- package.json `npm init -y`
- tsconfig.json `tsc --init`

## Basic Datatypes

- number `Data must be a number`
- string `should be a string`
- boolean `either true or false`
- null `null or empty`
- undefined `data is not defined`
- any `can be anything`

## Advance Datatypes

- interface 
`when we have an object then we give this type to it`
`we can implement interfaces to classes using implement keyword`
```
    interface User{
        name:string,
        age:number
    }
```
- type 
`we can't use implement on types but it let us to do many other things`
```
    type User = {
        name:string,
        age:number
    }
```
- type Provide some special feature to variable :
    - Union
        ```
            type multiTypeVar1 = string | number;
            function printID(id:multiTypevar1){
                console.log(`ID is : ${id}`);
            }
            printID(01);
            printID('yet28wsbao9e0e2');
        ```
    - Intersection 
        ```
            type Frontend ={
                react:string,
                tailwind:string
            }
            type Backend = {
                nodejs:string,
                mongodb = string,
            }
            type DevOops = {
                docker = string,
                awsServer =string
            }
            type FullStack = Frontend & Backend & DevOops; 
            const fullstack:FullStack={
                react:"For frontend use ReactJS",
                tailwind:"use for stylesheet",
                nodejs:"use for backend",
                mongodb:USe for NoSQL db,
                docker:"Use for Cloud computing",
                awsServer:"AWS Machine for serverless server"
            } 
        ```
## enum

- ENUM is used to make code more human understandable as well as readable
- It provides more input controll to developer
- It defines what data has to enter
- Syntax is :
  ```
  enum enum_name{
      Data_Boundation_Name1,
      Data_Boundation_Name2,
      Data_Boundation_Name3,
  }
  ```
- We can also define what should log during run time by default its going according to index
  ```
  enum Direction{
      UP = "UP",
      DOWN = "DOWN",
      LEFT = "LEFT",
      RIGHT = "RIGHT",
  }
  ```
