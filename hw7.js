// Задание 1
let str = "js";
str = str.toUpperCase();
console.log(str);


// Задание 2
function filterStrings(array, startStr){
    return array.filter((item) =>
    item.toLowerCase().startsWith(startStr.toLowerCase())
    );
}


// Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));


// Задание 4
let n = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...n));
console.log(Math.max(...n));


// Задание 5
function random(){
console.log(Math.floor(Math.random() * 10)+ 1);
}


// Задание 6
function randomNum (n){
    let result = [];
    for (let i = 0; i < n / 2; i++){
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}

// Задание 7
function acc (min, max){
return Math.floor(Math.random() * (max - min + 1) + min);
}

// Задание 8
console.log(new Date());

// Задание 9
let current = new Date();
current.setDate(current.getDate()+73);
console. loq (current);


// Задание 10
function formatDate(date){
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Cpeдa",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "сентября",
    "ноября",
    "декабря",
];
    return `Дата: ${date.getDate()} ${
    months [date. getMonth ()]
    } ${date.getFullYear ()} - это ${
    days [date.getDay ()]
    }/nВремя: ${date.getHours()}:${date.getMinutes ()}:$ {date.getSeconds()}`;
}
console.log(formatDate(new Date()));

// задание 11 оложить в функцию 
function f(){
let fruits = [
    'Яблоко',
    'Груша',
    'Дыня', 
    'Виноград',
    'Персик', 
    'Апельсин', 
    'Мандарин',
]
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let firstGuess = prompt ("Чему равнялся первый элемент массива?");
let lastGuess = prompt ("Чему равнялся последний элемент массива?");
if (firstGuess === fruits [0] && lastGuess === fruits [fruits.length - 1]) {
    alert ("Поздравляем! Вы угадали оба слова.");
}
else if (firstGuess === fruits [0] || lastGuess === fruits [fruits. length- - 1]){
    alert ("Вы были близки к побеле!");
}
else{
    alert("Вы не угадали ни одного слова.");
}
}
function gameStop 