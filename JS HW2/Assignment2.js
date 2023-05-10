// Question 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let vals = Object.values(person3);
for (property in person3){
    // inside of the loop we must use bracket notation
    console.log((person3[property]));
}




// Question 2

const Person = function(name, age) {

    this.name = name;
  
    this.age = age;
  
  }
  
  Person.prototype.printInfo = function() {
  
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  
  };
  
  Person.prototype.addAge = function(years) {
  
    this.age += years;
  
  };
  
  const person1 = new Person("John", 25);
  
  const person2 = new Person("Mary", 30);

  person1.printInfo(); // Output: Name: John, Age: 25
  
  person2.printInfo(); // Output: Name: Mary, Age: 30
  
  person1.addAge(3);

  person1.printInfo(); //
  
  Output: Name: John, Age: 28




  // Question 3

function checkStringLength(string) {
    return new Promise((resolve, reject) => {
      // Check if the length of the string is greater than 10
      if (string.length > 10) {
        // If the length is greater than 10, resolve the Promise with the message "Big word"
        resolve("Big word");
      } else {
        // If the length is less than or equal to 10, reject the Promise with the message "Small Number"
        reject("Small Number");
      }
    });
  }

  // Example usage:

// Call checkStringLength with the input "Hello, World!"
checkStringLength("Hello, World!")
.then(result => {
  // If the Promise is resolved, log the result to the console
  console.log(result); // Output: Big word
})
.catch(error => {
  // If the Promise is rejected, log the error message to the console
  console.log(error); // This won't be triggered for the given input
});