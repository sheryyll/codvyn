function sumOfTwoNumbers(a, b){
  console.log(`Sum is: ${a+b}`);
}

function checkEvenOdd(num){
    if(num % 2 === 0){
        console.log(`${num} is Even`);
    }else{
        console.log(`${num} is odd`);
    }
}

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(`Largest is ${num1}`);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(`Largest is ${num2}`);
    } else {
        console.log(`Largest is ${num3}`);
    }
}


function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`Fahrenheit valuE of ${celsius}°C is ${fahrenheit}°F`);
}

sumOfTwoNumbers(5, 10);
checkEvenOdd(7);
findLargest(10, 25, 15);
celsiusToFahrenheit(30);


