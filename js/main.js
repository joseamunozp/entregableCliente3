const array = ["Joaquin", 1, ["Hola", "Adios"], true];

// Ejercicio 1

for (let index in array) {
  localStorage.setItem("array-" + index, JSON.stringify(array[index]));
}

// Ejercicio 2

const newArray = [];
for (let index in array) {
  newArray.push(JSON.parse(localStorage.getItem("array-" + index)));
}

console.log(newArray);

// Ejercicio 3 y 4

 for (let value of array) {   
    const div = document.createElement("div");
    div.innerHTML = value
    document.body.appendChild(div);
}