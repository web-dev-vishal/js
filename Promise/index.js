// console.log("promise")

// Promise

// Pending : Initial state, opertion hasn't completed

// Fullfiled : Opertion succeeded, giving a resolved value

// Rejected : Opertion failed, providing a reason (error) 

let doHomework = new Promise((resolve, reject)=> {
    let completed = true; //Change to false to test rejection

    console.log("Starting the My homework");

    setTimeout(()=>{
        if(completed){
            resolve:({msg:"Home work Finished" , value:20})
        }else{
            reject(`Did'nt finish homework`)
        }
    },2000); //2 sec only

})

doHomework.then(msg =>console.log(msg.value)).catch(err=> console.log(err))