// console.log("We are in a loop")

/*
type of loops-
1. for loop - number of iteration that we known
2. while loop - 

for loop
syntax :  
for (let i = 1; i <= 5; i++){
    console.log("Aryan",i);
}

output: 
Aryan 1
Aryan 2
Aryan 3
Aryan 4
Aryan 5

 while loop

syntax:
let i = 1;

 while(i<= 5){
     console.log("Aryan", i);
     i++
 }
 
output: 
Aryan 1
Aryan 2
Aryan 3
Aryan 4
Aryan 5

*/

let num = 10;
let sum = 0;

while ( num != 0){
    sum += num;

    console.log("Num = "+num+" Sum = ",sum );
    num--;

}


