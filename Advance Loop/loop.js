// <------------------ for-in Loop ---------------------->
// for-in loop - used to loop through object properties (keys)

const phone = {
    brand: 'Apple',
    model: 'iphone-16',
    price: '180000',
    camera: '20 MP',
    ram: '12GGB',
    rom: '256GB'
}

for (let key in phone) {           // loop through each property name (key)
    console.log(key);              // print the property name
    console.log(phone[key]);       // print the property value
}

/*
output:
brand
Apple
model
iphone-16
price
180000
camera
20 MP
ram
12GGB
rom
256GB
*/


// <------------------ for-of Loop ---------------------->
// for-of loop - used to loop through array values

const numbs = [10, 20, 30, 40, 50];

for (let value of numbs) {         // loop through each value in array
    console.log(value);            // print the value
}

/*
output:
10
20
30
40
50
*/


// <------------------ forEach Loop ---------------------->
// forEach loop - array method that loops through each element
// gives you value, index, and whole array

let nums = [10, 20, 30, 40]

nums.forEach((value, index, nums) => {     // value = element, index = position, nums = whole array
    console.log(value, '=>', index, '=>', nums)  // print all three
})

/*
output:
10 => 0 => [10, 20, 30, 40]
20 => 1 => [10, 20, 30, 40]
30 => 2 => [10, 20, 30, 40]
40 => 3 => [10, 20, 30, 40]
*/

/*
Summary:
- for-in: use for objects (gives you keys)
- for-of: use for arrays (gives you values)
- forEach: use for arrays (gives you value, index, and whole array)
*/