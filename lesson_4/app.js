console.log("Lesson 4");


// Функции


console.log("open geeks online")
console.log("select homework");
console.log("download zip");
console.log("open IDE");
console.log("checking homework....")
let mistakes = [];
if (mistakes.length > 0) {
    console.log("write comments")
}

console.log("write grade");
if (mistakes > 3) {
    console.log("decline homework")
} else {
    console.log("accept homework");
}

function checkHomework() {
    console.log("open geeks online")
    console.log("select homework");
    console.log("download zip");
    console.log("open IDE");
    console.log("checking homework....")
    let mistakes = [];
    if (mistakes.length > 0) {
        console.log("write comments")
    }
    console.log("write grade");
    if (mistakes > 3) {
        console.log("decline homework")
    } else {
        console.log("accept homework");
    }
}

// let students = ["Alina", "Ksenya", "Vlad"];
//
// for (let student of students) {
//     checkHomework();
// }

function setBlueBackground() {
    document.body.style.backgroundColor = 'blue';
}

function setPinkBackground() {
    // body
    document.body.style.backgroundColor = 'pink';
}


// function declaration
function getCashback(purchaseAmount) {
    let cashback = 0;
    let cashbackText = "";

    if (purchaseAmount <= 10_000) {
        cashback = purchaseAmount * 0.01;
        cashbackText = "1%";
    } else if (purchaseAmount > 10_000 && purchaseAmount <= 50_000) {
        cashback = purchaseAmount * 0.02;
        cashbackText = "2%";
    } else if (purchaseAmount > 50_000) {
        cashback = purchaseAmount * 0.03;
        cashbackText = "3%";
    }

    return {
        value: cashback,
        text: cashbackText
    };
}


let myBankInfo = {
    name: "Evgeniy",
    surname: "Kiselev",
    card: {
        number: "1234 1324 1324 1324",
        pin: "1234",
        balance: 5000,
        type: "Credit"
    },
    email: "evgeniy.kiselev@mail.com",
    password: "123qwe"
}

let purchaseAmount = 17500;

if (myBankInfo.card.balance >= purchaseAmount
    || myBankInfo.card.type === "Credit") {

    let cashback = getCashback(purchaseAmount);

    myBankInfo.card.balance -= purchaseAmount;
    myBankInfo.card.balance += cashback.value;
    console.log("Cashback is (" + cashback.text + ") " + cashback.value);
} else {
    console.warn("Not enough money...")
}

// refactoring

// function expression
let getFrontendTeacherName = function (monthIndex) {
    switch (Number(monthIndex)) {
        case 1: 
            return "Felix";
        case 2:
            return "Evgeniy";
        case 3:
            return "Nurdin";
        case 4:
            return "Azamat";
        case 5:
            return "Daniyar";
    }
}

let getBackendTeacherName = function (monthIndex) {
    switch (Number(monthIndex)) {
        case 1:
            return "Aleksey";
        case 2:
            return "Radomir";
        case 3:
            return "Ramis";
        case 4:
            return "Temirlan";
        case 5:
            return "Igor";
    }
}

let getAndroidTeacherName = function (monthIndex) {
    switch (Number(monthIndex)) {
        case 1:
            return "Rahat";
        case 2:
            return "Tilek";
        case 3:
            return "Aijamal";
    }
}

function getTeacherName_error(courseName, monthIndex){
    switch (courseName) {
        case "frontend":
            switch (Number(monthIndex)) {
                case 1:
                    return "Felix";
                case 2:
                    return "Evgeniy";
                case 3:
                    return "Nurdin";
                case 4:
                    return "Azamat";
                case 5:
                    return "Daniyar";
            }
        case "backend":
            switch (Number(monthIndex)) {
                case 1:
                    return "Aleksey";
                case 2:
                    return "Radomir";
                case 3:
                    return "Ramis";
                case 4:
                    return "Temirlan";
                case 5:
                    return "Igor";
            }
        case "android":
            switch (Number(monthIndex)) {
                case 1:
                    return "Rahat";
                case 2:
                    return "Tilek";
                case 3:
                    return "Aijamal";
            }
    }
}

function getTeacherName(courseName, monthIndex){
    switch (courseName) {
        case "frontend":
            return getFrontendTeacherName(monthIndex);
        case "backend":
            return getBackendTeacherName(monthIndex);
        case "android":
            return getAndroidTeacherName(monthIndex);
    }
}

// NaN - Not a Number


// function declaration
function getMax(a, b){

    // if(a > b){
    //     return a;
    // }else{
    //     return b;
    // }

    return a > b ? a : b;
}

// function expression
let getMin = function (a, b) {
    return a > b ? b : a;
}

console.log("Max within 5 and 48: " + getMax(5, 48));
console.log("Min within 5 and 48: " + getMin(5, 48));
let language = "ru";
console.log(language === "ru" ? "Добро пожаловать": "Welcome");

let okpo = "      ";

// 0 NaN null undefined "" '' false => false

console.log("Your status:", okpo.trim() ? "ИП" : "Физ.лицо");

function getCardHolderName(surname, name){
    return surname.toUpperCase() + " " + name.toUpperCase();
}

console.clear();
console.log(getCardHolderName("ivan", "ivanov", "ivanovich", "aka", "eminem"));


