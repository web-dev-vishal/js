// ==================== DEFINITIONS ====================

// PROMISE: An object representing the eventual completion (or failure) of an asynchronous operation.
// Has 3 states: Pending (initial), Fulfilled (success), Rejected (failure)

// RESOLVE: Function called inside Promise when operation succeeds. Passes the success value.

// REJECT: Function called inside Promise when operation fails. Passes the error/reason.

// .THEN(): Method to handle fulfilled Promises. Takes a callback that runs when Promise resolves.
// Returns a new Promise, allowing chaining of multiple async operations.

// .CATCH(): Method to handle rejected Promises. Takes a callback that runs when Promise is rejected.
// Catches errors from any previous Promise in the chain.

// PROMISE CHAINING: Linking multiple .then() calls sequentially. Each .then() must return a Promise
// to pass it to the next .then(). Executes operations one after another in order.

// ASYNC/AWAIT: Modern syntax for handling Promises. 'async' declares an async function that returns a Promise.
// 'await' pauses execution until Promise resolves. Makes async code look synchronous and easier to read.

// TRY/CATCH: Error handling block used with async/await. 'try' contains code that might fail,
// 'catch' handles any errors that occur in the try block.

// SETTIMEOUT: Asynchronous function that executes code after a specified delay (in milliseconds).
// Used here to simulate time-consuming operations.

// Function that simulates doing homework
// Returns a Promise that resolves after 2 seconds
const doHomework = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Homework done✅")
        }, 2000); // 2 sec only
    })
}

// Function that simulates doing revision
// Returns a Promise that resolves after 1.5 seconds
const revision = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Revision done✅")
        }, 1500); //1.5 sec only
    })
}

// Function that simulates playing games
// Returns a Promise that resolves after 1 second
const Games = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Played game done✅")
        }, 1000); //1 sec only
    })
}

// Async function to execute daily routine tasks sequentially
// Using async/await syntax for cleaner Promise handling
const dailyRouting = async () =>{
    try {
        // Wait for homework to complete, then log the result
        let homeworkStatus = await doHomework();
        console.log(homeworkStatus);

        // Wait for revision to complete, then log the result
        let revisionStatus = await revision();
        console.log(revisionStatus);

        // Wait for games to complete, then log the result
        let gameStatus  = await Games();
        console.log(gameStatus);
    } catch (error) {
        // Handle any errors that occur during the execution
        console.log(error);
    }
};

// Execute the daily routine function
dailyRouting();

// Alternative approach using Promise chaining with .then()
// This achieves the same sequential execution as async/await above
// doHomework().then(res =>{
//     // Log homework completion status
//     console.log(res);
//     // Return the revision Promise to chain it
//     return revision();
// }).then(res => {
//     // Log revision completion status
//     console.log(res);
//     // Return the Games Promise to chain it
//     return Games();
// }).then(res => {
//     // Log games completion status
//     console.log(res);
//     // return Games();
// })
// // Catch any errors that occur in the Promise chain
// .catch(err => console.log(err))