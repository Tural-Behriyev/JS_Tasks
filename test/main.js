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
//   console.log(`${i} <br>`);
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

// const changeToUpperCase = arr => {
//   const newArr = []
//   for (const element of arr) {
//     newArr.push(element.toUpperCase())
//   }
//   return newArr
// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUpperCase(countries))

/////////////////////////////////////////////////////////////////////////////

// const sayHello = (name, gander) => {
//   let message = "";
//   switch (gender) {
//     case "Q":
//     case "q":
//       message = `salam xanım ${name}`;
//       break;
//     case "K":
//     case "k":
//       message = `salam cenab ${name}`;
//     default:
//       message = "error";
//   }
//   return message;
// };
// console.log(sayHello("Tural", "K"));

/////////////////////////////////////////////////////////////////////////////

// const sum = () => {
//   let n1 = +prompt("1-ci reqemi daxil edin");
//   let n2 = +prompt("2-ci reqemi daxil edin");
//   let cem = 0;
//   let kicik = Math.min(n1, n2);
//   let boyuk = Math.min(n1, n2);
//   for (let i = kicik; i <= boyuk; i++) {
//     if (i % 2 === 0) {
//       cem += i;
//     }
//   }
//   return cem;
// };
// document.write(sum());

/////////////////////////////////////////////////////////////////////////////

// function User(_ad, _surname) {
//   this.name = _ad;
//   this.surname = _surname;
// }
// let tural = new User("Tural", "Bəhriyev");
// document.write(tural);

/////////////////////////////////////////////////////////////////////////////

// let arr = [];
// let cem = 0;
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// let newArr = arr.filter((num) => String(num).includes(1));
// document.write(newArr);
// newArr.forEach((num) => (cem += num));

/////////////////////////////////////////////////////////////////////////////

// let users = [{ name: "John", surname: "Doe" }];
// const newuser = (name, surname) => {
//   function User(_name, _surname) {
//     this.name = _name;
//     this.surname = _surname;
//   }
//   const userName = new User(name, surname);
//   document.write(userName);
//   users.push(userName);
// };
// newuser("john", "doe");

/////////////////////////////////////////////////////////////////////////////

// const createNumber = (...numbers) => numbers.sort((a, b) => b - a);
// document.write(createNumber(1, 2, 4, 5, 6, 78, 643, 32, 1));

/////////////////////////////////////////////////////////////////////////////

// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// };
// document.write(sum(1, 2, 4, 5, 6, 7));

/////////////////////////////////////////////////////////////////////////////

// const obj = {
//   name: "john",
//   surname: "doe",
//   age: 24,
//   getFullName: function () {
//     let fullname = `${this.name} ${this.surname}`;
//     return fullname;
//   },
// };
// document.write(`${obj.getFullName()} <br>`);

// const x = Object.entries(obj);
// document.write(`${x} <br>`);

// const keys = Object.keys(obj);
// document.write(` ${keys} <br>`);

// const valuse = Object.values(obj);
// document.write(` ${valuse} <br>`);

/////////////////////////////////////////////////////////////////////////////

// const callBak = n => n ** 2;
// const cube = (callBak, n) => {
//   return callBak(n) * n;
// };
// document.write(cube(callBak, 3));

/////////////////////////////////////////////////////////////////////////////

// const a = (s1) => {
//   const b = (s2) => {
//     const c = (s3) => {
//       return s1 + s2 + s3;
//     };
//     return c;
//   };
//   return b;
// };
// document.write(a(5)(10)(15));

/////////////////////////////////////////////////////////////////////////////

// const arr = [1,12,23,3,43,5];
// const newArr = [...arr];
// arr.push(17);
// console.log(`${arr}`);
// console.log(`${newArr}`);

/////////////////////////////////////////////////////////////////////////////

// const obj = {
//   name: "john",
//   surname: "doe",
// };
// const newObj = {...obj};
// obj.newObj = "tural";
// console.log(obj);
// console.log(newObj);

/////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// console.log(total);

/////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];
// let total = 0;
// numbers.forEach(i => total +=i);
// console.log(total);

//! reduce() mehode
//! map() mehode

/////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5,'test'];
// const addNumber = number => {
//   if(!numbers.includes(number)){
//     numbers.push(number);
//   }
// }
// addNumber(5);
// addNumber(11);
// addNumber(76);
// addNumber(34);
// addNumber(23);
// console.log(numbers.includes("test", 5));

/////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];
// const found = numbers.find(numbers => numbers > 11);
// console.log(found);

/////////////////////////////////////////////////////////////////////////////

// const person = [
//   {
//     id: 1,
//     name: "John",
//   },
//   {
//     id: 2,
//     name: "John",
//   },
//   {
//     id: 3,
//     name: "John",
//   },
// ];
// let found = person.find((user) => user.id == 2);
// console.log(found);

/////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];
// const filter = numbers.filter((number) => number > 2);
// console.log(filter);

/////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];
// const every = numbers.every(number => number <= 10);
// console.log(every);

/////////////////////////////////////////////////////////////////////////////

// document.querySelector('.active').scrollIntoView({
//     inline:'center'
// })

/////////////////////////////////////////////////////////////////////////////

// let seconds = 10,
//   span = document.getElementById("seconds");
// const counter = () => {
//   if (seconds > 1) {
//     seconds -= 1;
//     span.innerText = seconds;
//   } else {
//     clearInterval(countdown);
//     alert("Finish");
//   }
// };

// let countdown = setInterval(counter, 1000);
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "visible") {
//     countdown = setInterval(counter, 1000);
//   } else {
//     console.log("stop");
//     clearInterval(countdown);
//     window.location.href = 'https://prototurk.com';
//   }
// });

/////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// let total = 0;
// numbers.forEach(number => total += number);
// numbers.forEach(function (number) {
//   total += number;
// });
// console.log(total);

/////////////////////////////////////////////////////////////////////////////

// let body = document.querySelector("body");
// const time = () => {
//   body.style.backgroundfColor = "red";
//   document.write('test');

// };
// const interval = setInterval(time, 1000);
// setTimeout(() => {
//   clearTimeout(interval);
//   console.log('interval iptal');
// }, 1000);

/////////////////////////////////////////////////////////////////////////////

// const arr = ["fonland", "sweden", "norway"];
// arr.forEach((e, i, array) => console.log(`${i} ${e.toUpperCase()} ${array}`));

/////////////////////////////////////////////////////////////////////////////

// const numbersForeach = [1, 2, 3, 4, 5, 6, 7];
// numbersForeach.forEach((num) => console.log(num * 2));

/////////////////////////////////////////////////////////////////////////////

// const numbersmap = [1, 2, 3, 4, 5, 6, 7];
// const numbers2 = numbersmap.map((num) => num * 2);
// console.log(numbers2);

/////////////////////////////////////////////////////////////////////////////

// let users = [
//   {
//     name: "Tural",
//     id: 10,
//   },
//   {
//     name: "john",
//     id: 5,
//   },
//   {
//     name: "doe",
//     id: 19,
//   },
// ];

// let newUsers;

// newUsers = users.map((person) => {
//   if (person.id === 5) {
//     person.name = "newname";
//   }
//   return person;
// });
// console.log(newUsers);

// users.forEach((person) => {
//   if (person.id === 5) {
//     person.name = "newname";
//   }
// });
// console.log(users);

/////////////////////////////////////////////////////////////////////////////

// const users = [
//   {
//     name: "q",
//     id: 1,
//   },
//   {
//     name: "q",
//     id: 1,
//   },
//   {
//     name: "o",
//     id: 2,
//   },
//   {
//     name: "q",
//     id: 1,
//   },
//   {
//     name: "o",
//     id: 2,
//   },
// ];

// const newUsers = users.filter((person) => person.id === 22);
// console.log(newUsers);

// users.forEach(person => {
//     if(person.id === 2){
//         console.log(person.name = 'bunlar oğlandır');
//     }
//     else{
//         console.log((person.name = "bunlar qızdır"));
//     }
// });

// const newUsers = users.map(person => {
//      if(person.id === 2){
//         person.name = 'boys';
//     }
//     else{
//         person.name = "girls";
//     }
//     return person
// })
// console.log(newUsers);

/////////////////////////////////////////////////////////////////////////////

// const number = [1, 2, 3, 4, 5, 6, 7];
// const num = number.reduce((oldValue, currentValue, i) => oldValue + currentValue + i);
// console.log(num);

/////////////////////////////////////////////////////////////////////////////

// const number = [1, 2, 3, 4, 5, 6, 7];
// const set = new Set(number);
// console.log(set);

/////////////////////////////////////////////////////////////////////////////

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// const [fronted, backend] = fullStack;
// console.log(fronted,backend);

/////////////////////////////////////////////////////////////////////////////

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// for (const [country, city] of countries) {
//     console.log(country,city);
// }

/////////////////////////////////////////////////////////////////////////////

// const h1 = document.getElementsByTagName('h1');
// [...h1].forEach(item => {
//     console.log(item);
// })

// const h1 = document.querySelectorAll('h1');
// [...h1].forEach(item => {
//     console.log(item);
// })

// const h1 = document.getElementsByClassName("tagName");
// [...h1].forEach(item => {
//     console.log(item);
// })

// const h1 = document.getElementsByClassName("tagName");
// const newh1 = [...h1];
// newh1[1].className = "newClass";
// newh1.forEach((item) => {
//   console.log(item);
// });

/////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector("button");
// const div = document.querySelector('div');
// const body = document.querySelector("body");

// btn.onclick = () => {
//     div.className.toggle("newClass");
// }
// btn.setAttribute('style','color: red');
// btn.setAttribute("title", "test");

/////////////////////////////////////////////////////////////////////////////

// const h1 = document.querySelectorAll('h1');
// console.log(typeof(h1));
// h1.forEach((item,i) => {
//     item.style.fontSize = '60px';
//     if(i %2 === 0) {
//         item.style.color = 'red'
//     }
//     else{
//         item.style.color = 'green'
//     }
// })

/////////////////////////////////////////////////////////////////////////////

// let h1  = document.createElement('h1');
// h1.className = "newClass";
// h1.textContent = 'h1';
// document.body.appendChild(h1)';

/////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   console.log(e);
//   document.body.style.backgroundColor = "red";
// });

/////////////////////////////////////////////////////////////////////////////

// const inp = document.querySelector("input");
// inp.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

/////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector("button");
// const attribute = btn.attributes;
// [...attribute].forEach((attr, i) => {
//   console.log(i, attr.name, attr.value);
// });

// for (const attr of attribute) {
//     console.log(attr.name, attr.value);
// }
// console.log(atr.title.value);

/////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector("button");
// const h1 = document.querySelectorAll("h1");

// [...h1].forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });
// btn.addEventListener("click", (e) => {
//   [...h1].forEach((item) => {
//     document.body.before(item);
//   });
// });

/////////////////////////////////////////////////////////////////////////////

// let sampleJson = `[
//   {
//     "name": "Tural",
//     "surname": "Behriyev"
//   },
//   {
//     "age": 24,
//     "ageColor": "black"
//   }
// ]`;
// let users = JSON.parse(sampleJson);
// console.log(users);
// console.log(sampleJson);
// console.log(typeof(users));

// let users = [
//   {
//     name: "john",
//     surName: "doe",
//     age: 244,
//     color: "grey",
//   },
//   {
//     name: "tural",
//     surName: "bahriyev",
//     age: 24,
//     color: "black",
//   },
// ];
// let usersJson = JSON.stringify(users);
// console.log(usersJson);

/////////////////////////////////////////////////////////////////////////////

// const student = {
//   firstName: "Asabeneh",
//   lastName: "Yetayehe",
//   age: 250,
//   isMarried: true,
//   skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
// };
// let studentJson = JSON.stringify({ firstName: student.firstName, lastName: student.lastName, skills: student.skills });
// console.log(studentJson);

/////////////////////////////////////////////////////////////////////////////

// localStorage.setItem("name", "Tural");
// localStorage.removeItem('name');
// console.log(localStorage.key());

/////////////////////////////////////////////////////////////////////////////

// const student = {
//   firstName: "Asabeneh",
//   lastName: "Yetayehe",
//   age: 250,
//   isMarried: true,
//   skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
// };
// localStorage.setItem("student", JSON.stringify(student));
// console.log(JSON.parse(localStorage.getItem("user")));
// localStorage.clear()

/////////////////////////////////////////////////////////////////////////////

//!products
// const basket = JSON.parse(localStorage.getItem("basket")) || [];
// const products = [
//   {
//     id: 1,
//     title: "mackbook1",
//     price: 123,
//   },
//   {
//     id: 2,
//     title: "mackbook2",
//     price: 456,
//   },
//   {
//     id: 3,
//     title: "mackbook3",
//     price: 789,
//   },
//   {
//     id: 4,
//     title: "mackbook4",
//     price: 3756,
//   },
// ];
// const addBasket = (productID) => {
//   basket.push(productID);
//   localStorage.setItem("basket", JSON.stringify(basket));
// };
// addBasket(2);
// addBasket(4);
// console.log(basket);
// localStorage.removeItem('basket')

/////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector("button");
// btn.onclick = () => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//   }, 1000);
// };

/////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector("button");
// const p = document.getElementById("p");

// let count = 0;
// p.innerText = count;

// const num = setInterval(() => {
//   count++;
//   p.innerText = count;
//   if (count % 2 === 0) {
//     document.body.style.backgroundColor = "red";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
//   if (count === 10) {
//     clearInterval(num);
//     document.body.style.backgroundColor = "white";
//     console.log("Stop Time");
//   }
// }, 1000)

/////////////////////////////////////////////////////////////////////////////

// function updateClock() {
//   const now = new Date();
//   const hours = now.getHours().toString();
//   const minutes = now.getMinutes().toString();
//   const seconds = now.getSeconds().toString();
//   const time = `${hours}:${minutes}:${seconds}`;
//   document.getElementById("clock").textContent = time;
// }
// setInterval(updateClock, 1000);
// updateClock();

/////////////////////////////////////////////////////////////////////////////

// class Person {
//   constructor(_firstName, _lastname) {
//     console.log(this);
//     this.fistname = _firstName
//     this.lastname = _lastname
//   }
// }
// const person1 = new Person('john1', 'doe1');
// const person2 = new Person("john2", "doe2");
// const person3 = new Person("john3", "doe3");

// console.log(person1);
// console.log(person2);
// console.log(person3);

/////////////////////////////////////////////////////////////////////////////

// const url = "https://jsonplaceholder.typicode.com/users";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send();

/////////////////////////////////////////////////////////////////////////////

// const url = "https://jsonplaceholder.typicode.com/users";
// const userNames = document.getElementById("userNames");
// const xhr = new XMLHttpRequest();
// let users = [];
// xhr.open("GET", url);
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(xhr.responseText);
//     data.forEach(({ email }) => {
//       userNames.innerHTML += `<li>${email}</li>`;
//     });
//   }
// };
// xhr.send();

/////////////////////////////////////////////////////////////////////////////

const url = "https://jsonplaceholder.typicode.com/users";
const cards = document.querySelector(".cards");
const xhr = new XMLHttpRequest();
xhr.open("GEt", url);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.response);
    data.forEach(({ name, username, email, phone }) => {
      cards.innerHTML += `
      <div class="card">
            <h2>${name}</h2>
            <h3>${username}</h3>
            <p>${email}</p>
            <p>${phone}</p>
        </div>
        `;
    });
  }
};
xhr.send();