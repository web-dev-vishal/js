const doHomework = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Homework done✅")
        }, 2000); // 2 sec only
    })
}

const revision = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Revision done✅")
        }, 1500); //1.5 sec only
    })
}

const Games = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Played game done✅")
        }, 1000); //1 sec only
    })
}

const dailyRouting = async () =>{
    try {
        
    } catch (error) {
        
    }
}

// doHomework().then(res =>{
//     console.log(res);
//     return revision();
// }).then(res => {
//     console.log(res);
//     return Games();
// }).then(res => {
//     console.log(res);
//     // return Games();
// })
// .catch(err => console.log(err))