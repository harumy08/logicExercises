//Step 1: Create a function that checks
//how many vowels and consonants do I have in the entered string.
//Step 3: Initialize variables to count the number of vowels and consonants
var vowelCount = 0;
var consonantCount = 0;


function counter(word){
    //Step 2: Convert the value to lowercase
    var lowercaseWord = word.replace(/\s/g, "").toLowerCase();
    //Step 4: Loop through the string
    for (var i = 0; i < lowercaseWord.length; i++) {
        var currentChar = lowercaseWord[i];
        
        if (currentChar === "a" || currentChar === "e" || currentChar === "i" || currentChar === "o" || currentChar === "u") {
            vowelCount++;
        } else if (currentChar >= "a" && currentChar <= "z") {
            consonantCount++;
        }
    }
    //Return
    return console.log("La palabra '" + word + "' tiene " + vowelCount + " vocal(es) y " + consonantCount + " consonante(s).");
}

counter('Vamos a Morir');