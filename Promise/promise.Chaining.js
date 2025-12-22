// const doHomework = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Homework done✅")
//         }, 2000); // 2 sec only
//     })
// }

// const revision = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Revision done✅")
//         }, 1500); //1.5 sec only
//     })
// }

// const Games = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Played game done✅")
//         }, 1000); //1 sec only
//     })
// }

// const dailyRouting = async () =>{
//     try {
//         let homeworkStatus = await doHomework();
//         console.log(homeworkStatus);

//         let revisionStatus = await revision();
//         console.log(revisionStatus);

//         let gameStatus  = await Games();
//         console.log(gameStatus);
//     } catch (error) {
//         console.log(error);
//     }
// };

// dailyRouting();

// // doHomework().then(res =>{
// //     console.log(res);
// //     return revision();
// // }).then(res => {
// //     console.log(res);
// //     return Games();
// // }).then(res => {
// //     console.log(res);
// //     // return Games();
// // })
// // .catch(err => console.log(err))

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