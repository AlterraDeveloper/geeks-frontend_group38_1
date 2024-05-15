
let userAgree = true;

if(userAgree){

}else{

}

let cardIsBlocked = false;
let cardBalance = 5000;

let amount = 1000;

if(!cardIsBlocked){
    cardBalance += amount;
}

if(cardIsBlocked){
    console.error("Card is blocked. Operation error")
}else{
    cardBalance += amount;
}

// let temperature = 15;
//
// if(temperature >= 20 && temperature < 30){
//     console.log("Warm");
// }else if(temperature >= 10 && temperature < 20){
//     console.log("Norm");
// }else if(){
//
// }else if(){
//
// }

let monthIndex = prompt("Enter your month");
let teacherName;

switch(Number(monthIndex)) {
    case 1: // monthIndex === 1
        teacherName = "Felix";
        break;
    case 2:
        teacherName = "Evgeniy";
        break;
    case 3:
        teacherName = "Nurdin";
        break;
    case 4:
        teacherName = "Azamat";
        break;
    case 5:
        teacherName = "Daniyar";
        break;
}

console.log("(Switch..case) Your teacher is " + (teacherName || "???"));

// == non-strict нестрогое
// ===  strict строгое

// Array массивы

let frontendTeachers = ["Felix", "Evgeniy", "Nurdin", "Azamat", "Daniyar"];
//                                    0         1          2         3         4
// length: 5

console.log("(Arrays) Your teacher is " + (frontendTeachers[monthIndex - 1] || "???"));

console.log("Frontend duration " + frontendTeachers.length + " months");

let newTeacher = "Vladislav";

frontendTeachers.push(newTeacher);

frontendTeachers.unshift("Alexey");

console.log("Frontend duration " + frontendTeachers.length + " months");


let falsyValues = [0, null, undefined, false, NaN, ""];

let objects = [{}, {}, {}, {}];

let cards = [5000, 7000, 0];

// loops - циклы
// for..of
// for
// for..in
// while
// do..while

for(let card of cards){
    console.log(card || "Нет средств")
}

let operations = [35_000, -7_000, -1_000, -200, -500, 5_000, -4000, -700, -1500];

let myIncomes = 0;
let myExpenses = 0;

let bankStatement = {
    incomes: 0,
    expenses: 0
}

for(let operation of operations){
    if(operation > 0){
        bankStatement.incomes += operation;
    }else{
        bankStatement.expenses += Math.abs(operation);
    }
}

console.log("My total incomes is:" + bankStatement.incomes)
console.log("My total expenses is:" + bankStatement.expenses)

// for

let phoneNumber = "+996555112233";
// "+996******233";

let name = "Evg******";
let surname = "Kis******";

let maskedPhoneNumber = "";

for(let i = 0; i < phoneNumber.length; i++){
  if(i < 4 || i > phoneNumber.length - 4){
      maskedPhoneNumber += phoneNumber[i];
  }  else{
      maskedPhoneNumber += "*";
  }
}

console.log(phoneNumber + " -> " + maskedPhoneNumber);




