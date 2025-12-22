// // console.log("promise")

// // Promise

// PROMISE: An object representing the eventual completion (or failure) of an asynchronous operation.
// Has 3 states: Pending (initial), Fulfilled (success), Rejected (failure)

// RESOLVE: Function called inside Promise when operation succeeds. Passes the success value.

// REJECT: Function called inside Promise when operation fails. Passes the error/reason.

// .THEN(): Method to handle fulfilled Promises. Takes a callback that runs when Promise resolves.
// Returns a new Promise, allowing chaining of multiple async operations.

// .CATCH(): Method to handle rejected Promises. Takes a callback that runs when Promise is rejected.
// Catches errors from any previous Promise in the chain.

// SETTIMEOUT: Asynchronous function that executes code after a specified delay (in milliseconds).
// Used here to simulate time-consuming operations.

// // Pending : Initial state, opertion hasn't completed

// // Fullfiled : Opertion succeeded, giving a resolved value

// // Rejected : Opertion failed, providing a reason (error) 

// let doHomework = new Promise((resolve, reject)=> {
//     let completed = true; //Change to false to test rejection

//     console.log("Starting the My homework");

//     setTimeout(()=>{
//         if(completed){
//             resolve:({msg:"Home work Finished" , value:20})
//         }else{
//             reject(`Did'nt finish homework`)
//         }
//     },2000); //2 sec only

// })

// doHomework.then(msg =>console.log(msg.value)).catch(err=> console.log(err))

// console.log("promise")

// Promise

// Pending : Initial state, operation hasn't completed

// Fulfilled : Operation succeeded, giving a resolved value

// Rejected : Operation failed, providing a reason (error) 

let doHomework = new Promise((resolve, reject)=> {
    let completed = true; //Change to false to test rejection

    console.log("Starting the My homework");

    setTimeout(()=>{
        if(completed){
            resolve({msg:"Home work Finished", value:20}) // Fixed: resolve() is a function, not an object with a property
        }else{
            reject(`Didn't finish homework`)
        }
    },2000); //2 sec only

})

doHomework.then(msg => console.log(msg.value)).catch(err => console.log(err))