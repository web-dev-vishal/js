// console.log("We are in a loop")

/* 
Types of loops:
1. for loop - when you know how many times to repeat
2. while loop - when you don't know how many times to repeat
3. do while loop - runs at least once, then checks condition
*/

// <------------------ for loop ---------------------->
// for loop example

/*
for (let i = 1; i <= 5; i++){  // start at 1, go until 5, add 1 each time
    console.log("Aryan", i);    // print "Aryan" with the number
}

output:
Aryan 1
Aryan 2
Aryan 3
Aryan 4
Aryan 5
*/


// <------------------ while loop ------------------->
// while loop example

/*
let i = 1;                      // start at 1
while(i <= 5){                  // keep going while i is 5 or less
    console.log("Aryan", i);    // print "Aryan" with the number
    i++                         // add 1 to i (very important!)
}

output:
Aryan 1
Aryan 2
Aryan 3
Aryan 4
Aryan 5
*/

// while loop - adding numbers example
/*
let num = 10;                   // start with 10
let sum = 0;                    // sum starts at 0

while (num != 0){               // keep going until num is 0
    sum += num;                 // add num to sum
    console.log("Num = " + num + " Sum = ", sum);  // show current values
    num--;                      // subtract 1 from num
}

output:
Num = 10 Sum = 10
Num = 9 Sum = 19
Num = 8 Sum = 27
Num = 7 Sum = 34
Num = 6 Sum = 40
Num = 5 Sum = 45
Num = 4 Sum = 49
Num = 3 Sum = 52
Num = 2 Sum = 54
Num = 1 Sum = 55
*/


// <--------------------- do while loop --------------------->
// do-while loop - runs first, checks condition later

/*
let i = 10;                     // start at 10

do{
    console.log("Do - while");  // this runs first
    i--;                        // subtract 1 from i
} while(i >= 10);               // check condition (is i still 10 or more?)

output:
Do - while
*/

// Note: This prints only once because i becomes 9 after first run
// and 9 is not >= 10, so loop stops