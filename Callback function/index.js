// Callback function

let greet = (name, callback) => {
    console.log('Hello' + name);
    callback();
}

let Saybye = () => {
    console.log('Bye');
}

greet('Aryan', Saybye);

// Callback with Sync

setTimeout(() => {
    console.log('Aryan');
}, 2000);

setTimeout(() => {
    console.log('Aryan');
}, 1000);

console.log('Ayan 2');

// Callback hell

setTimeout(() => {
    console.log('Aryan 1');
    setTimeout(() => {
        console.log('Aryan 2');
        setTimeout(() => {
            console.log('Aryan 3');
        }, 1000)
    }, 1000)
}, 1000)
