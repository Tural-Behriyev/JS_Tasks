let name = prompt("add your name");
let gender = prompt("enter your gender (m/f)");
let age = +prompt("add your age");

if (gender === "m" || gender === "M") {
  console.log(`Hi Mr. ${name}`);
} else if (gender === "f" || gender === "F") {
  console.log(`Hi Mrs. ${name}`);
} else {
  console.log("enter your gender correctly");
}

let ageControl = age > 18 ? `Welcome to the party ${name}!` : `You cannot enter the party ${name}!`;
console.log(ageControl);
