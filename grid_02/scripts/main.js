const changeColor = document.querySelector(".card");

changeColor.addEventListener("click", function () {
  changeColor.style.backgroundColor = "#0000";
});

// Language: javascript

// function map

const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

console.log(numbersMultipliedByTwo);

// Filter

const ages = [8, 2, 27, 22, 12, 40];

// filtrando os adultos da lista de idades
const adults = ages.filter(function (age) {
  return age >= 18;
});

console.log(adults);

// Reduce

const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0); // accumulator vai começar no zero

console.log(sumOfAges);


// Objetos

const person = {
  name: "John Doe",
  age: 32,
  hobbies: ["music", "sports"],
  cat: {
    name: "Max",
    age: 2,
  },
};

console.log(person.name);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Meeting with client",
    isCompleted: false,
  },
];

const descriptionOfTodo = todos[0].text;

console.log(descriptionOfTodo);

// JSON 
// transforma um objeto em um JSON
const todosJson = JSON.stringify(todos);  // ENVIANDO EM JSON
console.log(todosJson);

const todosList = JSON.parse(todosJson)  // Recebendo em lista
console.log(todosList);


// For 

for ( i= 0; i < todosList.length; i++) {
  console.log(todosList[i]);
}


// For mais simples 
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

for (let car of cars) {
    console.log(cars);
    
}

// Com o forEach nos pedemos passar o index como parametro na function
cars.forEach(function(car, index) {
    console.log(`${index} : ${car}`);
})