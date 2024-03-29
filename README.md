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
- types 
`we can't use implement on types but it let us to do many other things`
```
    types User = {
        name:string,
        age:number
    }
```
