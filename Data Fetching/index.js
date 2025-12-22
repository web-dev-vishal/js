// console.log("fetching data from api");

const fetchData = async () =>{
    let api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await api.json();
    console.log(data)
}

fetchData();