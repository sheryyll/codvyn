for(let i = 1; i <= 50; i++){
    if( i % 2 === 0){
        console.log(i,"even");
    }else{
        console.log(i);
    }
}

// An array of numbers and a function that returns only even numbers using filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers(numbers));

// An object student with name, age, and skills (array)
const student = {
  name: "Jenisha",
  age: 19,
  skills: ["HTML", "CSS", "JavaScript"]
};

// Add a new skill to the object
student.skills.push("React");
  console.log(student);

// Use a loop to print all keys and values of the object
for (let key in student) {
  console.log(key + ":", student[key]);
}