// Print odds 1-20 - Using a loop write code that will console.log all of the odd values from 1 up to 20.
for (var i=0; i<=100; i++) {
    if (i === 0) {
            console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}

//Decreasing Multiples of 3 - Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
const num1 = 0;
const num2 = 100;
let output = [];

if (num1 <= num2) {
  for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0)
      output.push(i);
  }
} else {
  alert("invalid range!");
}
console.log(output);

//Print the Sequence - Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
for(var i=4;i>=-3.5;i-=1.5){    
    console.log(i)    
        }

//Sigma - Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sum=0;
for(var i=0;i<=100;i++){
    {
      sum+=i;
    }
}
console.log(sum)

//Factorial - Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    p *= array[i];
    }
console.log(' Product :  ' +p);