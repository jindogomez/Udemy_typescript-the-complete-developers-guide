let apples: number = 5; // type annotation for a number variable
let bananas: 10; // type inference for a number variable (inferred as 10)

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
let point: { x: number; y: number } = {    
    x: 10, 
    y: 20 
}; // type annotation for an object literal (point) with specific properties (x = 10 and y = 20)



// when to use annotations?

// 1) when a function returns the 'any' type
const json = '{"x": 10, "y": 20}'; // a JSON string representing an object with properties x and y

const coordinates = JSON.parse(json); // JSON.parse returns 'any' type, so we need to provide a type annotation to specify the expected structure of the resulting object
console.log(coordinates); // logs the coordinates object to the console {x: 10, y: 20}

coordinates.blah; // no error here because coordinates is of type 'any', which allows any property to be accessed without type checking
// Here it is a very bad thing to have coordinates as 'any' because it can lead to runtime errors if we try to access properties that do not exist on the object.

// AVOID any AT ALL COSTS! Always provide a type annotation when the type cannot be inferred, especially when dealing with external data (like JSON) that may not have a predictable structure. 
// This helps catch errors at compile time and ensures that your code is more robust and maintainable.

const coordinates2: { x: number; y: number } = JSON.parse(json); // type annotation for the result of JSON.parse, specifying that it should be an object with properties x and y of type number
console.log(coordinates2); // logs the coordinates2 object to the console {x: 10, y: 20}


// 2) when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"]; // type inference for an array of strings

let foundWord; // without a type annotation, foundWord is of type 'any', which can lead to issues later when we try to use it
for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true; // foundWord is assigned a boolean value, but since it was initially of type 'any', it can lead to confusion and potential errors later in the code
    }
}

let foundWord2: boolean; // type annotation for foundWord2, specifying that it should be a boolean
for (let i = 0; i < words.length; i++) {
    if (words[i] === "red") {
        foundWord2 = true; // foundWord2 is assigned a boolean value, and since it was initially annotated as a boolean, it provides better type safety and clarity in the code
    }
}

// 3) when a variable with a type cannot be inferred correctly
let numbers = [-10, -1, 12]; // type inference for an array of numbers

let numberAboveZero: number | boolean = false; // type annotation for numberAboveZero, specifying that it can be either a number or a boolean
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]; // numberAboveZero is assigned a number, but since it was initially annotated as a union type (number | boolean), it can also be assigned a boolean
    }
} 
