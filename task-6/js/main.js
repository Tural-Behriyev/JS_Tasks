let userName = prompt("enter your username");
let gender = prompt("enter your gender (m/f)");

if (gender === "m" || gender === "M") {
  console.log(`Hi Mr. ${userName}`);
} else if (gender === "f" || gender === "F") {
  console.log(`Hi Mrs. ${userName}`);
} else {
  console.log("enter your gender correctly");
}



switch (gender.toLowerCase()) {
  case "m":
    console.log(`Hi Mr. ${userName}`);
    break;
  case "f":
    console.log(`Hi Mrs. ${userName}`);
    break;
  default:
    console.log("enter your gender correctly");
    break;
}