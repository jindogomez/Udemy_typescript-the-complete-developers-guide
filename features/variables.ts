let apples: number = 5; // type annotation for a number variable

let speed: string = "fast"; // type annotation for a string variable

let isAvailable: boolean = true; // type annotation for a boolean variable

let nothing: null = null; // type annotation for a null variable

let notDefined: undefined = undefined; // type annotation for an undefined variable


// built in types
let now: Date = new Date(); // type annotation for a Date object

// array
let colors: string[] = ["red", "green", "blue"]; // type annotation for an array of strings
let countables: number[] = [1, 2, 3]; // type annotation for an array of numbers
let truths: boolean[] = [true, false, true]; // type annotation for an array of booleans

// classes
class Car {
}
let myCar: Car = new Car(); // type annotation for an instance (myCar) of the Car class

// object literals
let point: { x:number; y:number } = {    
    x: 10, 
    y: 20 
}; // type annotation for an object literal (point) with specific properties (x = 10 and y = 20)

// functions
const logNumber = ( i:number ) => {
    console.log(i);
}