let name = "Vadim";
let birthDate; // undefined


let aboutMe = {
    name: "Evgeniy",
    surname: "Kiselev",
    birthDate: null,
}

// console.log(aboutMe.surname + " " +  aboutMe["name"]);
// console.log(aboutMe.job);
// console.log(aboutMe["job"]);

// строчный комментарий

/*
    Это
    блочный
    комментарий
 */

// Data types - типы данных

// 1. string - текстовый, строковый
// 2. number - числовой
// 3. boolean - логический
// 4. undefined - неопределенный
// 5. null - пустой
// 6. object - объект

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
let mbankReceiverName = myBankInfo.name
    + " " + myBankInfo.surname[0] + "."; // Evgeniy K.

console.log(mbankReceiverName);

let amount = 3000;

// concatenation - конкатенация +

console.log(myBankInfo.card.balance + amount);

// myBankInfo.card.balance = myBankInfo.card.balance + amount;
myBankInfo.card.balance += amount;

console.log("My balance: " + myBankInfo.card.balance);

// + - * / % **
// += -= *= /= %= **= short-hand

let purchaseAmount = 17500;

// conditions - условия

// сравнения - > < >= <= == === != !==

if (myBankInfo.card.balance >= purchaseAmount
    || myBankInfo.card.type === "Credit") {

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

    myBankInfo.card.balance -= purchaseAmount;
    myBankInfo.card.balance += cashback;
    console.log("Cashback is (" + cashbackText + ") " + cashback)
} else {
    console.warn("Not enough money...")
}

console.log("My balance: " + myBankInfo.card.balance);

let weekday = "wed";

if (weekday === "wed" || weekday === "sat") {
    console.log("Yohooo, js lesson");
} else {
    console.log("Yeah, another day")
}

let inputCardNumber = "1234 1324 1324 1324";
let inputPin = "5555";

if (myBankInfo.card.number === inputCardNumber
    && myBankInfo.card.pin === inputPin) {
    console.log("Welcome to your bank!");
} else {
    console.error("Access denied.")
}

let inputEmail = "evgeniy.kiselev@mail.com";
let inputPassword = "123qwe";

if (myBankInfo.email === inputEmail
    && myBankInfo.password === inputPassword) {
    console.log("Welcome to Internet Banking")
} else {
    console.error("Invalid email or password");
}

let convertAmount = 100_000;
let currency = "USD";
let convertResultAmount = 0;

if (currency === "USD") {
    convertResultAmount = convertAmount / 88.5;
} else if (currency === "EUR") {
    convertResultAmount = convertAmount / 98.5;
} else if (currency === "RUB") {
    convertResultAmount = convertAmount / 1.2;
} else if (currency === "CNY") {
    convertResultAmount = convertAmount / 10;
}

switch (currency) {
    case "USD":
        convertResultAmount = convertAmount / 88.5;
        break;
    case "EUR":
        convertResultAmount = convertAmount / 98.5;
        break;
    case "RUB":
        convertResultAmount = convertAmount / 1.2;
        break;
    case "CNY":
        convertResultAmount = convertAmount / 10;
        break;
}

for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        document.body.innerHTML += "<div class='even'>" + i + "</div>"
    }else{
        document.body.innerHTML += "<div class='odd'>" + i + "</div>"
    }

}