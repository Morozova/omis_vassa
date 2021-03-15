console.log('Hello TypeScript')

//number 
//string 
//boolean
//Any
//undefined
//enum
//bigint -> 100000n
//void -> no return
// fn -> type -> return
let z:any = ''

let cars:string[] = ['audi', 'bmw']
//let cars2:Array<string> = ['audi', 'bmw']  
let carItems:[string, number] = ['audi', 2.0] 

function getA(x:number = 18, y:string = 'text'):void
{
    console.log('this is void fn')
}
getA()

function getB():string{
    return 'this is return fn'
}
getB()
//javascript
let months = {
    january:1,
    february:2
}

//typescript

enum months2 {
    january = 10,
    february = 20
}

let myMonths:months2 = months2.january

if(typeof cars == "object"){
    console.log('this is a array')
}

let txt:any = 'Hello TypeScript'
let txtLenth:number = (<string>txt).length
let txtLenth2:number = (txt as string).length

function getAllArguments (x:string, ...r:number[]){}

function getM(x:(n:number, m:number) => number):number{
    return 10
}

let fn = function (n:number, m:number) {
    let a:number = n + m
    return a
}
getM(fn)

let sum = (x:number, y:number) => x + y

console.log("result: ", sum(2,4))

class X {
    constructor(public _internal= 'hahaha'){
    }
}