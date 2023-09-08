// //TASK 1
// const alphabetStr = 'abcdefghigklmnopqrstuvwxyz';
// const alphabet = [];

// //FROM STR OF alphabetStr TAKE ALL LETTER AND MAKE AN ARRAY
// for(let i = 0; i < alphabetStr.length; i++){
//   alphabet.push(alphabetStr[i]);
// }

// const userStr = prompt('Enter str to encode');

// let encodeTxt = [];

// //IF CHAR = EL FROM ALPHABET , WE WILL PUSH IT TO NEW ARRAY encodeTxt  
// for(let i = 0; i < userStr.length; i++){
//   let enteredChar = userStr[i];

//   for(let j = 0; j < alphabet.length; j++){
//     if(alphabet[j] == enteredChar){
//       encodeTxt.push(`${j + 1}`);
//       break;
//     }
//   }
// }


// console.log(encodeTxt.join(" "));

//TASK2 (TO CAMEL CASE) foo_bar = fooBar
const userStr = prompt("Enter ur txt to turn it into camelCase style");

let camelCaseWord = '';

for(let i = 0; i < userStr.length; i++){
  const strsChar = userStr[i];
  
  switch (strsChar) {
    case ' ':
      camelCaseWord += userStr[i + 1].toUpperCase();
      i += 1;
    continue; 

    case '-':
      camelCaseWord += userStr[i + 1].toUpperCase();
      i += 1;
    continue;

    case '_':
      camelCaseWord += userStr[i + 1].toUpperCase();
      i += 1;
    continue;

    default:
      break;
  }

  camelCaseWord += strsChar.toLowerCase();
}

console.log(camelCaseWord);