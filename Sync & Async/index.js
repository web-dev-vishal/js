// <------------------ Synchronous ---------------------->
// Synchronous - code runs line by line, one after another

console.log('Start');           // runs first
console.log('This will run');   // runs second
console.log('End');             // runs third

/*
output:
Start
This will run
End
*/


// <------------------ Asynchronous ---------------------->
// Asynchronous - some code runs later, doesn't wait in line

console.log('Aryan');           // runs first

setTimeout(() => {              // this waits and runs last (after 0ms delay)
    console.log('Sagar');       
}, 0)

console.log('Vedant');          // runs second

/*
output:
Aryan
Vedant
Sagar
*/

/*
Why this happens:
- console.log('Aryan') runs immediately
- setTimeout puts 'Sagar' in waiting (even with 0ms delay)
- console.log('Vedant') runs immediately
- 'Sagar' runs after everything else finishes

Summary:
- Synchronous: runs in order, top to bottom
- Asynchronous: some code waits and runs later
*/