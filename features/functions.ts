// functions

// type annotation for a function that takes a number (i) as an argument and returns void (does not return anything)
const logNumber: (i: number) => void = ( i: number ) => { 
    console.log(i); // function body
};

// type annotation and inference

// type annotation for a function that takes two numbers (a and b) as arguments and returns a number (the sum of a and b)
const add = (a: number, b: number): number  => {
    return a + b;
};
// we can also rely on type inference for the return type of the function, since TypeScript can infer that the return type is a number based on the return statement
const add2 = (a: number, b: number) => {
    return a + b;
};
// however, if we omit the return statement, TypeScript will infer the return type as void, which may not be what we intended
const subtract = (a: number, b: number) => {
    a - b;
};
// in this case, TypeScript will infer the return type of subtract as void, which means that the function does not return anything, even though we may have intended for it to return the result of a - b.


// named function declaration with type annotations for the parameters and return type
function divide(a: number, b: number): number {
    return a / b;
};
// function expression with type annotation for the function itself
const multiply = function(a: number, b: number): number {
    return a * b;
};

//function which does not return anything, so we annotate the return type as void
const logger = (message: string): void => {
    console.log(message);
};

// this function will never return a value, it will always throw an error, so we annotate the return type as never
const throwError = (message: string): never => {
    throw new Error(message); 
};
// the throwError function will never return a value because it always throws an error
const throwError2 = (message: string): void => {
    if (!message) {
        throw new Error("No message provided");
    }    
};


// destructuring with type annotations
const todaysWeather = {
    date: new Date(),
    weather: "sunny"
};
// type annotation for a function that takes an object with properties date (of type Date) and weather (of type string) as an argument and returns void
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather); 
}
// we can also use destructuring in the function parameters to directly access the properties of the forecast object, and provide type annotations for the destructured properties
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}
logWeather(todaysWeather);