// sample.js

// A simple function to greet a user
function greet(name) {
    console.log(`Hello, ${name}! Welcome to the project.`);
}

// An array of users
const users = ['Alice', 'Bob', 'Charlie'];

// Loop through the users and greet each one
users.forEach(user => {
    greet(user);
});

// Export the greet function for use in other modules (if using Node.js or bundlers)
module.exports = { greet };
