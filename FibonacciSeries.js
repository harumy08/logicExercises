// Paso 1: Solicitar al usuario el número de elementos de la serie Fibonacci
var n = parseInt(prompt("Ingrese el número de elementos de la serie Fibonacci:"));

// Paso 3: Crear un array vacío para almacenar los números de la serie
var fibonacci = [];

// Paso 4: Iterar N veces para generar los números de la serie
for (var i = 0; i < n; i++) {
  // Paso 5: Agregar los primeros números a la serie
  if (i < 2) {
    fibonacci.push(i);
  } else {
    // Paso 6: Calcular el siguiente número de la serie
    var nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextNumber);
  }
}

// Paso 7: Mostrar los elementos del array fibonacci
console.log("Serie Fibonacci:");
console.log(fibonacci);