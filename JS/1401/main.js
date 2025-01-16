{
    let num = +prompt("1.Ввесдите число для возведения в квадрат");
    alert(num**2);
}

{
    let num1 = +prompt("2.Введите 1 число");
    let num2 = +prompt("2.Введите 2 число");
    alert(`Серднее арифметическое чисел ${num1} и ${num2}: ${(num1+num2)/2}`);
}

{
    let storona = +prompt("3.Введите сторону квадрата");
    alert(`Площадь квадрата: ${storona**2}`);
}

{
    const KOEF = 0.621371;
    num = +prompt("4.Введите количество км");
    alert(`${num} километров - это ${num*KOEF} миль`);
}

{
    let num1 = +prompt("5.Введите 1 число");
    let num2 = +prompt("Введите 2 число");
    alert(`${num1}+${num2} = ${num1+num2}\n${num1}-${num2} = ${num1-num2}\n${num1}*${num2} = ${num1*num2}\n${num1}/${num2} = ${num1/num2}`);
}

{
    a = +prompt("6.Введите значение а");
    b = +prompt("Введите значение b");
    alert(`В формуле ${a} * x + ${b} = 0\nx = ${-b/a}`)
}

{
    let time_hours = +prompt("Сколько сейчас часов?");
    let time_minutes = +prompt("Сколько сейчас минут?");

    let time_in_min = time_hours*60 + time_minutes;
    let time_in_day = 24*60;

    let anytime = time_in_day-time_in_min;

    alert(`До следующего дня ${Math.floor(anytime/60)} часов ${anytime%60} минут`)
}

{
    let num = prompt("Введите 3х значное число");
    alert(num[1]);
}

{
    let num = +prompt("Введите 5х значное число");
    firstnum = String(num%10);
    let newnum = String(Math.floor(num / 10));
    alert(firstnum + newnum);
}

{ 
    let sum = +prompt("Введите ваш объем продаж");
    alert(`Ваша зарплата составляет ${250+(sum*0.1)}`);
}