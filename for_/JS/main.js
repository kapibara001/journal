let age = 122;
let str = "Hello World!";

//alert("age - " + typeof age + "\nstr - " + typeof str)

//alert("Максимальное допустимое безопасное число - " + Number.MAX_SAFE_INTEGER + "\nМинимальное допустимое безопасное число - " + Number.MIN_SAFE_INTEGER)
//alert("Макимальное допустимое небезопасное число - " + Number.MAX_VALUE + "\nМинимальное допустимое небезопасное число - " + Number.MIN_VALUE)


let var_number =  123456;
let var_string_in_number = var_number.toString();
//alert("var_number - " + var_number + " " + typeof var_number + 
//    "\nvar_string_in_number - " + var_string_in_number + " " + typeof var_string_in_number);

/** 
let a, b;
a = +prompt("Введите число A: ")
b = +prompt("Введите число B: ")

let result = a + b;
alert(a + " + " + b + " = " + result)

result = a-b;
alert(a + " - " + b + " = " + result);
*/


let A = 4, B = 7;
result = Math.floor(A / B); // Округление вниз
alert(result);
result = Math.ceil(A / B); // Округление вверх
alert(result)
result = Math.round(A / B); // Округление по правилам математики
alert(result)