// Interfaces

// without interface
const oldCivic = {
  model: "Civic",
  year: 1999,
  broken: true,
};

// The function expects an object with specific properties, and the oldCivic object matches that structure, so it can be passed directly to the function without any issues.
const printHonda = (vehicle: { model: string; year: number; broken: boolean }): void => {
    console.log(`Model: ${vehicle.model}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};
printHonda(oldCivic);

// Every time we use printVehicle, we have to repeat the really long type annotation of the object it expects, which can lead to errors and makes the code less maintainable.
// To solve this problem, we can use an interface to define the structure of the object once and then reuse that interface whenever we need to type an object with that structure:
interface Vehicle {
  model: string;
  year: Date;
  broken: boolean;
}

// lets use another object that matches the Vehicle interface, and we can pass it to the printVehicle function without having to repeat the type annotation for the object structure.
const newCivic = {
  model: "Civic",
  year: new Date(),
  broken: false,
  summary(): string {
    return `Model: ${this.model} - Year: ${this.year.getFullYear()} - Broken: ${this.broken}`;
  }
};

// Now we can use the Vehicle interface to type the parameter of the printVehicle function, which makes the code cleaner and more maintainable. 
// We can also reuse the Vehicle interface for other functions that expect an object with the same structure.
const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Model: ${vehicle.model}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(newCivic);


// Functions in interfaces
interface Reportable {
    summary(): string; // This means that any object that implements the Reportable interface must have a summary method that returns a string.
}

// We can use the Reportable interface to type the parameter of the printSummary function.
function printSummary(item: Reportable): void {
    console.log(item.summary());
}

// A different object that also has a summary method that returns a string.
const drinkeydrunkdrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has this grams of sugar: ${this.sugar}`;
    }
};

// The printSummary function can accept both the newCivic and drinkeydrunkdrink objects because they both implement the Reportable interface by having a summary method that returns a string.
// This allows us to write more flexible and reusable code, as we can work with any object that implements the Reportable interface without needing to know its specific structure.
printSummary(newCivic);
printSummary(drinkeydrunkdrink);