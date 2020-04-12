// 1 - Escriba una función que retorne el mayor elemento de un array de números
// No vale utilizar el método .sort()
let numeros = [10, 9, 5, 20, 15];

function greatestElement(numbers) {
  return numbers.reduce((acc, num) => acc = acc > num ? acc : num, 0);
}
console.log("el elemento mas grande es: " + greatestElement(numeros));


// 2 - Escriba una función que calcule la suma de todos los elementos numéricos de un array
function suma(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0)
}
console.log("la suma es: " + suma(numeros));


// 3 - Escriba una función que retorne true si una String es un palíndromo
//const sentence = "A man a plan a canal Panama";
const sentence = "A man a plan a canal Panama";

function isPalindrome(text) {
  let cleanText = text.toLowerCase();
  cleanText = cleanText.replace(/\s/ig, '');
  let reverseText = cleanText.split('').reverse().join('');
  //console.log(cleanText);
  //console.log(reverseText);
  return cleanText == reverseText;
}
console.log(isPalindrome(sentence));


// 4 - Escriba una función que combine 2 listas alternando sus elementos.
// ej: [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

function alternateElements(arr1, arr2) {
  let resultArray = [];
  let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      resultArray.push(arr1[i]);
    }
    if (i < arr2.length) {
      resultArray.push(arr2[i]);
    }
  }

  return resultArray;
}
console.log(alternateElements(arr1, arr2));

// 5 - Escribe una función que calcule la lista de los primeros 100 números Fibonacci 
// Los primeros números Fibonacci son 1 y 1. 
// El enésimo numero Fibonacci se calcula agregando el enésimo-1 con el enésimo-2
//  1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
function first100Fibonacci() {
  let fibonacciArray = [1, 1]
  for (let f = 2; f < 100; f++) {
    fibonacciArray.push(fibonacciArray[f - 2] + fibonacciArray[f - 1]);
  }
  return fibonacciArray;
}
console.log(first100Fibonacci());


// 6 - Escribir función para tomar un array de Strings e imprimir, cada palabra en una línes
// dentro de un cuadro retangular. 
// Por ejemplo la lista ["Hello", "World", "in", "a", "frame"] debería salir así:
//
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
const words = ["Hello", "World", "in", "a", "frame"];

function wordsInASquare(words) {
  let widthSquare = words.reduce((max, word) => word.length > max ? word.length : max, 0);
  console.log('*'.repeat(widthSquare + 4));
  words.forEach(word => console.log(`* ${word}${' '.repeat(widthSquare-word.length)} *`));
  console.log('*'.repeat(widthSquare + 4));
}
wordsInASquare(words);


// 7 - Escribir función para converter un texto en código-morse y vice-versa
// ej: toMorseCode("SOS") debería ser retornar "...---..."
let arrLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let arrMorse = ['·—', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '--.--', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];

function transToMorse(text) {
  let letters = text.toLowerCase().split('');
  let morse = letters.map(letter => arrMorse[arrLetters.indexOf(letter)]);

  return morse.join('');
}
console.log(transToMorse("SOS"))

// 8 - A partir de 2 Strings, escribir un programa que encuentre la sequencia comun de caracteres más grande
// ej: subsequence("Hola soy una String", "Hola soy una otra String")
// debería retornr "Hola soy una "
// ojo que la palabra "String" también es una sequencia comun, bien como "una", "soy", la letra "a"...
// pero hay que retornar la string comun más grande posible
const text1 = "Hola soy una String";
const text2 = "Hola soy una otra String";

function subsequence(_text1, _text2) {
  let longestText = "";
  let longestArray = _text1.length > _text2.length ? _text1.length : _text2.length;
  let arrText1 = _text1.split('');
  let arrText2 = _text2.split('');
  let tmpLongestText = "";

  for (let l = 0; l < longestArray; l++) {
    let letter1 = "";
    let letter2 = "";
    if (l < _text1.length) {
      letter1 = _text1[l];
    }
    if (l < _text2.length) {
      letter2 = _text2[l];
    }

    if (letter1 === letter2) {
      tmpLongestText += letter1;
    } else {
      longestText = longestText.length > tmpLongestText.length ? longestText : tmpLongestText;
      tmpLongestText = "";
      //if (l<longestArray-1) {l=0;}
    }
  }

  return longestText;
}
console.log(subsequence(text1, text2));


// 9 - If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
var th = ['', 'thousand', 'million', 'milliard', 'billion'];
var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toWords(s) {
  let s = s.toString();
  s = s.replace(/[\, ]/g, '');
  if (s != parseFloat(s)) return 'not a number';
  var x = s.indexOf('.');
  if (x == -1)
    x = s.length;
  if (x > 15)
    return 'too big';
  var n = s.split('');
  var str = '';
  var sk = 0;
  for (var i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == '1') {
        str += tn[Number(n[i + 1])] + ' ';
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + ' ';
        sk = 1;
      }
    } else if (n[i] != 0) { // 0235
      str += dg[n[i]] + ' ';
      if ((x - i) % 3 == 0) str += 'hundred ';
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk)
        str += th[(x - i - 1) / 3] + ' ';
      sk = 0;
    }
  }

  if (x != s.length) {
    var y = s.length;
    str += 'point ';
    for (var i = x + 1; i < y; i++)
      str += dg[n[i]] + ' ';
  }
  return str.replace(/\s+/g, ' ');
}

function howManyLettersFrom1to1000() {
  let allNumbersWords = "";
  for (let n = 1; n < 1001; n++) {
    allNumbersWords += toWords(n).replace(/\s/gi, '');
  }
  //console.log(allNumbersWords);
  return allNumbersWords.length;
}
console.log(howManyLettersFrom1to1000());

// 10 - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
function numberRange(start, end) {
  let returnArray = [];
  for (let n = start; n < (end + 1); n++)
    returnArray.push(n);

  return returnArray;
}

function sum3or5Multiples(range) {
  return range.reduce((sum, number) => sum += (number % 3 === 0 || number % 5 === 0 ? number : 0), 0);
}
console.log(sum3or5Multiples(numberRange(1, 1000)));