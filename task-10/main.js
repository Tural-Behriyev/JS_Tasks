//?task1

// let place1 = prompt("Enter the first place:");
// let place2 = prompt("Enter the second place:");
// let num1 = +(place1);
// let num2 = +(place2);
// let sum = num1 + num2;
// while (sum !== 3) {
//   sum += 7;
// }
// console.log("The final sum is: " + sum);

///////////////////////////////////////////////////////////////////////////////\

//?task2

// const N = +prompt("Enter the number of times to repeat the message:");
// if (!isNaN(N) && N > 0) {
//     for (let i = 0; i < N; i++) {
//         console.log("I know how to use cycles");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid positive number.");
// }

///////////////////////////////////////////////////////////////////////////////\

//?task3

// let adSoyad = prompt("Zəhmət olmasa adınızı və soyadınızı daxil edin");
// let separete = adSoyad.indexOf(" ");
// let ad = adSoyad.slice(0, separete);
// let soyad = adSoyad.slice((adSoyad.length - separete) * -1);
// console.log(`${soyad} " " ${ad}`);

///////////////////////////////////////////////////////////////////////////////\

//?task4

// let number = prompt("Zəhmət olmasa nömrə daxil edin");
// isvalidNumber = () => console.log(number.startsWith('+7') && number.length === 11);
// isvalidNumber();

///////////////////////////////////////////////////////////////////////////////

//?task5

// let metn = prompt('Mətn daxil edin');
// let i = 0;
// let metn2 = ' ';
// const textNum = () =>{
//     while(i<metn.length){
//         if(metn[i] == Number(metn[i])){
//             metn2 += metn[i].toString();
//         }
//         i++
//     }
//     return metn2;
// }
// console.log(textNum());

///////////////////////////////////////////////////////////////////////////////

//?task6

// function processString(inputString) {
//     let words = inputString.split(/\s+/);
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.includes('!')) {
//             words[i] = word.replace(/!/g, '') + '!';
//         }
//     }

//     return words.join(' ');
// }
// let inputString = "Hello! !!FE-25";
// let result = processString(inputString);
// console.log(result);

///////////////////////////////////////////////////////////////////////////////

//?task7

// function capitalizeAndPrint(input) {
    // let capitalizedInput = input.toUpperCase();
//     console.log(capitalizedInput);
// }
// capitalizeAndPrint("hello");

///////////////////////////////////////////////////////////////////////////////

//?task8

// function capitalizeAndPrint(input) {
//     if (!input) {
//         console.log("Please provide a valid input.");
//         return;
//     }
//     let capitalizedString = input.toUpperCase();
//     console.log(capitalizedString);
// }
// capitalizeAndPrint("hello world");



///////////////////////////////////////////////////////////////////////////////

//?task9

// function capitalizeAndPrint(input) {
//     if (!input) {
//         console.log("Please provide a valid input.");
//         return;
//     }
    // let capitalizedString = input.toLowerCase();
//     console.log(capitalizedString);
// }
// capitalizeAndPrint("hello world");

///////////////////////////////////////////////////////////////////////////////

//?task11

// function nameFormat(fullName) {
//     const names = fullName.trim().split(' ');
//     const firstName = names[0];
//     const lastName = names[names.length - 1];
//     const firstInitial = firstName.charAt(0).toUpperCase() + ".";
//     const formattedName = `${firstInitial} ${lastName}`;
//     return formattedName;
// }
// const fullName = "Tural Bəhriyev";
// console.log(nameFormat(fullName));

///////////////////////////////////////////////////////////////////////////////

//?task12

// function endsWithGmail(email) {
//     return email.endsWith('@gmail.com');
// }
// console.log(endsWithGmail('abcdf@gmail.com'));
// console.log(endsWithGmail('example@yahoo.com'));


///////////////////////////////////////////////////////////////////////////////

//?task13

// function containsLowerCase(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i].toUpperCase()) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(containsLowerCase("HELLO"));
// console.log(containsLowerCase("Hello"));


///////////////////////////////////////////////////////////////////////////////

//?task14

// function getFirstFiveCharacters(sentence) {
//     return sentence.slice(0, 5);
// }
// const sentence = "This is a sample sentence.";
// console.log(getFirstFiveCharacters(sentence));


///////////////////////////////////////////////////////////////////////////////

// //?task15

// function replaceSpaces(word) {
//     return word.replace( "-");
// }
// let wordWithSpaces = "hello world";
// let replacedWord = replaceSpaces(wordWithSpaces);
// console.log(replacedWord);








