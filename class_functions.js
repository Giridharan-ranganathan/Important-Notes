// Write a “person” class to hold all the details
class Person {
    constructor(firstName, lastName, age, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    // Method to get full name
    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    // Method to get details
    getDetails() {
        return `
            Name: ${this.getFullName()}
            Age: ${this.age}
            Gender: ${this.gender}
            Email: ${this.email}
        `;
    }
}

// Creating an instance of Person class
let person1 = new Person("John", "Doe", 30, "Male", "john@example.com");

// Accessing details of person1
console.log(person1.getDetails());


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------


// write a class to calculate the Uber price
class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const fareWithoutBookingFee = (this.baseFare + (this.costPerMinute * timeInMinutes) + (this.costPerMile * distanceInMiles));
        const totalFare = fareWithoutBookingFee + this.bookingFee;
        return totalFare;
    }
}

// Example usage:
const uberX = new UberPriceCalculator(2.5, 0.35, 1.75, 1.5); // Example pricing for UberX
const distance = 10; // Distance in miles
const time = 20; // Time in minutes
const totalPrice = uberX.calculatePrice(distance, time);
console.log("Total Uber price:", totalPrice.toFixed(2)); // Output total price rounded to 2 decimal places
