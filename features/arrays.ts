const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// 2D array
const carsByMake = [
    ['f150'], 
    ['corolla'], 
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0]; // Type is inferred as string
const myCar = carMakers.pop(); // Type is inferred as string

// Prevent incompatible values
// carMakers.push(10);

// Help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// Flexible types 
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10'); // This is allowed because the array can contain both Date and string types


// Tuples

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
const pepsi = ['brown', true, 40]; // Type is inferred as (string | boolean | number)[]

type Drink = [string, boolean, number]; // Define a type alias for the tuple
const sprite: Drink = ['clear', true, 40]; // Now we can use the Drink type for better type safety


// Key value pairs
const carSpecs: [number, number] = [400, 3354]; // This tuple represents horsepower and weight but we don't know which is which

const carStats = {
    horsepower: 400,
    weight: 3354
}; // This object is more descriptive and easier to understand than the tuple, as it uses named properties to indicate what each value represents.