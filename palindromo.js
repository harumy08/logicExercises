//Paso 1: Crear funcion que revise si la cadena es un palindromo
function palindrome(cad){
    // Paso 1: Crear variable para almacenar cadena y 
    //eliminar espacios y convertir a minúsculas
    var processedCad = cad.replace(/\s/g, "").toLowerCase();
    //Paso 2: Crear variable para almacenar una versión invertida de la cadena
    var reversedCad = "";
    // Paso 4: Invertir la palabra o frase
    for (var i = cad.length - 1; i >= 0; i--) {
        reversedCad += processedCad[i];
    }
    // Paso 5: Comparar la palabra o frase original con la invertida
    if (processedCad === reversedCad) {
        return console.log(cad + " es un palíndromo.");
    } else {
        return console.log(cad + " no es un palíndromo.");
    }

}


//Paso 6: Le doy salida
palindrome('radar');
palindrome('hola');