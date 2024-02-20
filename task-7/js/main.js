// Task - 01;

// function user(userName) {
//   console.log(userName + " is active now");
// }
// user("John");
// user("Alice");
// user("Emma");

////////////////////////////////////////////////////////////////////////////////////////////////

// Task - 02;

// function enBoyukTeyinEt(a, b, c) {
//   let enBoyuk = Math.max(a, b, c);
//   console.log("Ən böyük ədəd:", enBoyuk);
// }

// enBoyukTeyinEt(987876868969, 88888, 7888883);
// enBoyukTeyinEt(15, 2, 8);
// enBoyukTeyinEt(7, 4, 9);


////////////////////////////////////////////////////////////////////////////////////////////////

// Task - 03; ....................

// function hesabCemiRubl(depozitler) {
//   let cemRubl = 0;
//   for (let i = 0; i < depozitler.length; i++) {
//     let hesab = depozitler[i][0];
//     let mebleg = depozitler[i][1];
//     if (hesab.toLowerCase().includes("rubl")) {
//       cemRubl += mebleg;
//     } else if (hesab.toLowerCase().includes("dollar")) {
//       cemRubl += mebleg * 75;
//     }
//   }
//   return cemRubl;
// }

// let depozitler = [
//   ["rubl", 1200],
//   ["dollar", 20],
// ];
// let cemRubl = hesabCemiRubl(depozitler);
// console.log("Bütün depozitlər üzrə məbləğ: " + cemRubl + " rubl.");

////////////////////////////////////////////////////////////////////////////////////////////////

// Task - 04;

// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(5, 3));
// console.log(min(-2, 10));
// console.log(min(47, 7));

////////////////////////////////////////////////////////////////////////////////////////////////

// Task - 05;

// function calc(num1, num2, operator) {
//     switch(operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//         default:
//             return "Düzgün riyazi əməliyyatı daxil edin: +, -, *, /";
//     }
// }
// console.log(calc(4, 6, '-'));

////////////////////////////////////////////////////////////////////////////////////////////////



// Task - 06; ....................

////////////////////////////////////////////////////////////////////////////////////////////////

// Task - 07;

// function cüt(number) {
//     return number % 2 === 0;
// }
// console.log(cüt(4));
// console.log(cüt(7));





////////////////////////////////////////////////////////////////////////////////////////////////

// Task - 08; ....................





////////////////////////////////////////////////////////////////////////////////////////////////





// Task - 09;

// function faktorialHesabla(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     let faktorial = 1;
//     for (let i = 2; i <= n; i++) {
//       faktorial *= i;
//     }
//     return faktorial;
//   }
// }
// let rəqəm = 5;
// let faktorialSonucu = faktorialHesabla(rəqəm);
// console.log(rəqəm + " rəqəminin faktorialı: " + faktorialSonucu);






////////////////////////////////////////////////////////////////////////////////////////////////





// Task - 10;

// function checkNumber(number) {
//   if (number > 0) {
//     return "Daxil etdiyiniz rəqəm müsbətdir.";
//   } else if (number < 0) {
//     return "Daxil etdiyiniz rəqəm mənfidir.";
//   } else {
//     return "Daxil etdiyiniz rəqəm sıfırdır.";
//   }
// }
// let userInput = prompt("Zəhmət olmasa bir rəqəm daxil edin:");
// let result = checkNumber(parseFloat(userInput));
// console.log(result);









////////////////////////////////////////////////////////////////////////////////////////////////






// Task - 11; ....................

// let eded = prompt("Zəhmət olmasa bir ədəd daxil edin:");
// if (eded == null || eded <= 0 || isNaN(eded)) {
//     console.log("Xahiş olunur düzgün bir ədəd daxil edin.");
// } else {
//     let cemi = 0;
//     for (let i = 1; i < eded; i++) {
//         if (eded % i === 0) {
//             cemi += i;
//         }
//     }
//     if (cemi === eded) {
//         console.log(eded + " mükəmməl bir ədəddir.");
//     } else {
//         console.log(eded + " mükəmməl bir ədəd deyil.");
//     }
// }





////////////////////////////////////////////////////////////////////////////////////////////////






// Task - 12;

// let ayAdi = prompt("Bir ay adı daxil edin: ");

// let gunSayi;

// switch (ayAdi) {
//     case "yanvar":
//     case "mart":
//     case "may":
//     case "iyun":
//     case "avqust":
//     case "oktyabr":
//     case "dekabr":
//         gunSayi = 31;
//         break;
//     case "fevral":
//         gunSayi = 28;
//         break;
//     case "aprel":
//     case "iyul":
//     case "sentyabr":
//     case "nöyabr":
//         gunSayi = 30;
//         break;
//     default:
//         gunSayi = "Düzgün bir ay adı daxil edin!";
// }
// if (typeof gunSayi === "number") {
//     console.log(ayAdi + " ayı " + gunSayi + " gün çəkir.");
// } else {
//     console.log(gunSayi);
// }






////////////////////////////////////////////////////////////////////////////////////////////////







// Task - 13;.......................






////////////////////////////////////////////////////////////////////////////////////////////////






// Task - 14;.......................

// function palindromYoxla() {
//   let soz = prompt("Bir soz daxil edin:");
//   let tersSoz = "";
//   for (let i = soz.length - 1; i >= 0; i--) {
//     tersSoz += soz[i];
//   }
//   if (soz.toLowerCase() === tersSoz.toLowerCase()) {
//     console.log(soz + " bir palindromdur.");
//   } else {
//     console.log(soz + " bir palindrom deyil.");
//   }
// }
// palindromYoxla();





////////////////////////////////////////////////////////////////////////////////////////////////






// Task - 16;.......................






////////////////////////////////////////////////////////////////////////////////////////////////







// Task - 17;

// function tekrarSayiHesabla(metin, herf) {
//   let tekrarSayi = 0;
//   for (let i = 0; i < metin.length; i++) {
//     if (metin[i] === herf) {
//       tekrarSayi++;
//     }
//   }
//   return tekrarSayi;
// }
// let metin = prompt("Metni daxil edin:");
// let herf = prompt("Hərfi daxil edin:");
// let tekrarSayi = tekrarSayiHesabla(metin, herf);
// alert("'" + herf + "' hərfi " + tekrarSayi + " dəfə təkrarlanır.");






////////////////////////////////////////////////////////////////////////////////////////////////




// Task - 18;

// function isInteger(param) {
//     return Number.isInteger(param);
// }
// console.log(isInteger(5));
// console.log(isInteger(5.5)); 
// console.log(isInteger("5"));







////////////////////////////////////////////////////////////////////////////////////////////////






// Task - 19;

// function reqemCemi(eded) {
//     let ededStr = eded.toString();
//     let cem = 0;
//     for (let i = 0; i < ededStr.length; i++) {
//         cem += parseInt(ededStr[i]);
//     }
//     return cem;
// }
// let eded = 547;
// let cem = reqemCemi(eded);
// console.log("Ədəd rəqəmlərinin cəmi: " + cem);






////////////////////////////////////////////////////////////////////////////////////////////////
