/*let namee = prompt("1.Введите ваше имя")
alert(`Hello, ${namee}`);
//alert("Hello " + namee);

let born_year = prompt("2.Введите ваш год рождения");
let age = 2024 - born_year;
alert("Вам " + age + " лет.")

let a = prompt("3.Введите сторону квадрата");
let aaaa = a*4;
alert("Периметр квадрата: " + aaaa);

let rad = prompt("4.Введите радиус окружности");
let sqrad = Math.PI * rad**2;
alert("Площадь окружности: " + sqrad);

let distanse = prompt("5.Введите расстояние между двумя городами в километрах");
let time = prompt("Введите количество часов, за которое вы хотите добраться");
alert(`Чтобы успеть вовремя, вам надо ехать со скоростью ${distanse/time} км\\ч`);

const DOLLAR = 102.29;
const EURO = 105.09;
let kof = DOLLAR/EURO;
let dol = prompt("6.Введите количество долларов для перевода в евро");
alert(`${dol} долларов - ${dol*kof} евро.`);

let gb = prompt("7.Введите количество гигабайт для флешки");
let count820 = (gb*1024)/820;
alert("На флешку поместиться " + Math.floor(count820) + " файлов по 820 Мб");

let sum = +prompt("8.Введите количество денег, которое вы имеете");
let price_chocolate = +prompt("Введите стоимость одной шоколадки");
alert(`На ${sum} вы можете купить ${Math.floor(sum/price_chocolate)} шоколадки и у вас останется сдачей ${sum%price_chocolate}`);

let number = +prompt("9.Введите трехзначное число:");
if (number >= 100 && number <= 999) {
    let reversedNumber = (number % 10) * 100 + Math.floor((number / 10) % 10) * 10 + Math.floor(number / 100);
    alert(`Число задом наперед: ${reversedNumber}`);
} else {
    alert("Введите корректное трехзначное число.");
}
*/

let fullnum = +prompt("Введите целое число");
alert(fullnum % 2 == 0 ? `Четное число ${fullnum}` : `Нечетное число ${fullnum}`)