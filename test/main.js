// for (let i = 10; i <= 100; i++) {
//   if (i == 50) {
//     continue;
//   }
//   else if (i % 2 === 0) {
//     document.write(`${i} <br>`);
//   }
// }

////////////////////////////////////////////////////////////////////////////

// for(let i = 1; i<=5;i++){
//     document.write(`${i} * ${i} = ${i * i} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12, 34, 576, 78, 9];
// for (let i = 0; i < test.length; i++) {
//     document.write(`${test[i]} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12];
// let sum = 0;
// for (let i = 0; i < test.length; i++) {
//   sum += test[i];
// }
// document.write(sum);

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12, 34, 576, 78, 9];
// let newArr = [];
// let sum = 0;
// for (let i = 0; i < test.length; i++) {
//   newArr.push(test[i] ** 2);
// }
// document.write(`${newArr} <br>`);

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12, 34, 576, 78, 9];
// let i = 0;
// while (i < test.length) {
//   document.write(`${test[i]}`);
//   if(i !== test.length -1){
//     document.write('-');
//   }
//   i++;
// }

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12, 34, 576, 78, 9];
// let i = 0;
// do {
//   document.write(`${test[i]}`);
//   if (i !== test.length - 1) {
//     document.write("-");
//   }
//   i++;
// } while (i < test.length);

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12, 34, 576, 78, 9,7,88,5,6];
// for (const [index, number] of test.entries()) {
//   document.write(`number ${index + 1}: ${number} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12, 34, 576, 78, 9,7,88,5,6];
// for (let number of test) {
//     document.write(`${number} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////

// const test = [1, 12, 34, 576, 78, 9,7,88,5,6,8,6,9,6,2,];
// for (let number of test) {
//     if(number === 34){
//         break;
//     }
//     document.write(`${number} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////

// for (let i = 10; i > 0; i--) {
//   document.write(`${i} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////

// let i = 0;
// while (i < 10) {
//   document.write(`${i} <br>`);
//   i++;
// }

/////////////////////////////////////////////////////////////////////////////

// let i = 0;
// do {
//   document.write(`${i} <br>`);
//   i++;
// } while (i < 10);

/////////////////////////////////////////////////////////////////////////////

// let x = +prompt('reqem daxil et');
// for (let i = 0; i < x; i++) {
//   document.write(`${i} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////

// for (let i = 2; i < 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     document.write(`${i} <br>`);
//   }
// }

/////////////////////////////////////////////////////////////////////////////

// let sum = 0;
// const outputDiv = document.getElementById("output");
// for (let i = 0; i < 100; i++) {
//   sum += i;
//   outputDiv.innerHTML += `${sum} <br>`;
// }

/////////////////////////////////////////////////////////////////////////////

// function number(a,b){
//   let sum = a *b;
//   return sum
// }
// document.write(number(4,7));

/////////////////////////////////////////////////////////////////////////////

// function arrSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const number = [1, 2, 5, 6, 7];
// document.write(arrSum(number));

/////////////////////////////////////////////////////////////////////////////

// function circle(r){
//   let radius = Math.PI * r *r;
//   return radius
// }
// document.write(circle(5));

/////////////////////////////////////////////////////////////////////////////

// const areaCircle = r => Math.PI * r * r;
// document.write(areaCircle(10));

/////////////////////////////////////////////////////////////////////////////

// function sumAllNums() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// document.write(sumAllNums(1, 2, 3, 4));

/////////////////////////////////////////////////////////////////////////////

// const changeToUpperCase = arr => {
//   const newArr = [];
//   for(e of arr){
//     newArr.push(e.toUpperCase());
//   }
//   return newArr;
// }
// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// document.write(changeToUpperCase(countries));


/////////////////////////////////////////////////////////////////////////////

const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))