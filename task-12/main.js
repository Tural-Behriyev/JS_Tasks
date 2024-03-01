//?task1

// function merge(array1, array2) {
//   let mergedArray = array1.concat(array2);
//   let uniqueArray = mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);
//   return uniqueArray;
// }
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// let result = merge(array1, array2);
// console.log(result);



//?task2

// function difference(array1, array2) {
//     return array1.filter(e => !array2.includes(e));
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const ferq = difference(array1, array2);
// console.log(ferq);



//?task3

// function sortArray(array) {
//   array.sort(function (a, b) {
//     return a - b;
//   });
//   return array;
// }
// let massivi = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// let sıralanmışMassiv = sortArray(massivi);
// console.log(sıralanmışMassiv);



//?task4

// function yoxla(arr) {
//   let nums = [1, 2, 3, 4, 5];
//     for (let i = 0; i < arr.length; i++) {
//     if (nums.indexOf(arr[i]) !== -1) {
//       return arr;
//     }
//   }
//     return "Massivdə uyğun rəqəmlər tapılmadı.";
// }
// console.log(yoxla([5, 6, 7]));
// console.log(yoxla([8, 9, 10]));



//?task5

// function searchArray(arr, num) {
//     if (arr.includes(num)) {
//         return arr;
//     } else {
//         return "Massivdə tapılmadı.";
//     }
// }
// let numbers = [1, 2, 3, 4, 5];
// let searchNum = 3;
// console.log(searchArray(numbers, searchNum));
// console.log(searchArray(numbers, 6));



//?task6

// let orijinalMassiv = [1, 5, -7, 3, -9, 4, -6, 2];
// let yeniMassiv = orijinalMassiv.map(function (element) {
//   return Math.abs(element) * 2;
// });
// console.log(yeniMassiv);



//?task7

// function findNames(namesArray) {
//   let namesStartingWithA = [];
//   for (let i = 0; i < namesArray.length; i++) {
//     if (namesArray[i][0] === "A") {
//       namesStartingWithA.push(namesArray[i]);
//     }
//   }
//   if (namesStartingWithA.length > 0) {
//     return namesStartingWithA;
//   } else {
//     return "Massivdə 'A' hərfi ilə başlayan heç bir ad tapılmadı.";
//   }
// }
// let namesArray = ["Alisa", "Bob", "Ketrin", "David", "Eva", "Endryu", "Frank", "Anna", "George", "Aleks"];
// console.log(findNames(namesArray));