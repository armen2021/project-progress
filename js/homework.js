
// Fibonacci sequence

let myValue;
let fibo = [0,1];
function fib (num){
    if(num <= 0){
    console.log("There is no value");    
    } else
    if(num == 1){
    console.log(fibo[0]);
    } else 
    if(num == 2){
    console.log(fibo[1]);    
    } else
    for(i = 2; i <= num-1; i++){
      fibo[i] = fibo[i-2] + fibo[i-1];
      myValue = fibo[i];      
    }
    console.log(myValue);
}


// Multiplication table
function mtpTable (num){
  for(i = 1; i <= 10; i++){
    x = num * i; 
    console.log(`${num} * ${i} = ${x}`);
  }
}

// Odd or even

function oddEven (num){
    if (num % 2 == 0){
        console.log("The number is even.")
    } else{
        console.log("The number is odd.")
    }
}