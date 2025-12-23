// console.log("We are in a loop")

/*
type of loops-
1. for loop - number of iteration that we known
2. while loop - 
3. do while loop - 

<------------------ for loop ---------------------->
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

<------------------ while loop ------------------->

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


let num = 10;
let sum = 0;

while ( num != 0){
    sum += num;

    console.log("Num = "+num+" Sum = ",sum );
    num--;

}

output : 
Num = 10 Sum =  10
Num = 9 Sum =  19
Num = 8 Sum =  27
Num = 7 Sum =  34
Num = 6 Sum =  40
Num = 5 Sum =  45
Num = 4 Sum =  49
Num = 3 Sum =  52
Num = 2 Sum =  54
Num = 1 Sum =  55

<--------------------- do while loop --------------------->
*/

let i = 12

do{
    console.log("Do - while")
    i --;
}while(i>=10);