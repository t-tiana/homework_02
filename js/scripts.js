'use strict';
// 1.Додати 2 скрипта на сторінку (напряму в тегу script та підключіть джс фаїл),
// у кожному з скриптів виведіть алерт з хеллов ворлд текстом.

alert('Hello World!');

// 2.Додати 2 повідомлення “Я люблю фронтенд” та “Я люблю JS”.

let whatever = 'frontend';
document.getElementById('message').innerHTML =`<span>I ❤ ${whatever}! </span>`;
document.write('I love JS ❤!');

// 3.Оголошуємо  змінні: admin и name. Запишіть в name Ваше імя.
// В admin запишіть – undefined.
// Переприсвойте name в admin. Введіть admin . Що буде?

let name ='T-tiana';
let admin = undefined;
name = admin;
console.log(admin);

// 4.Запитати в юзера його імя, додати до імені – “Батькович” та вивести його на екран

let nameQuestion = prompt('What\'s your name?', 'Хтознахто');
alert(`${nameQuestion} Батькович`);

// 5.Undefined, e is not defined. Спробуємо вивести оголошену але не присвоєну змінну.

let someone;
console.log(someone);

// Домашня робота
// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».

let ageQuestion = prompt('How old are you?', '26');
alert(`Hi! I\'m ${ageQuestion} years old :)`);

// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років.

const currentYear = new Date().getFullYear();
let yearOfBirthQuestion = prompt('What\'s your birth year?', '1994');
let age = currentYear-yearOfBirthQuestion;
alert(`Are you ${age} years old?`);

// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.

let rectangleLength = prompt('Input the rectangle length.', '25');
let rectangleWidth = prompt('Input the rectangle width.', '15');
let rectanglePerimeter = 2 * (Number(rectangleLength)+Number(rectangleWidth));
alert(`The perimeter is ${rectanglePerimeter}`);

// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число Пі)

let radius =  prompt('Input the circle\'s radius', '14');
let area = Math.PI * (Number(radius) ** 2);
alert(`The area is ${area}`);

//  5. Водій їде з середньою швидкістю 50 км в годину.
//  Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.

let speed = 50;
let hours =  prompt('Input the amount of hours to go at the speed of 50km/h.');
let distance = Number(hours) * speed;
alert(`The distance would be ${distance} km.`);

// 6. Реалізуємо конвертер кілометрів в милі і навпаки =)

function mlKmConverter()
{
    let  miles = document.getElementById("miles");
    let kilometers  = document.getElementById("kilometers");
}

function milesConvert()
{
    kilometers.value = (miles.value*0.62137).toFixed(2);
}

function kilometersConvert()
{
    miles.value = (kilometers.value/0.62137).toFixed(2);
}

mlKmConverter();

// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину.
// Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.

let petrolCalculator = () =>
{
    let petrol = parseInt(document.getElementById("petrol").value);
    let money = parseInt(document.getElementById("money").value);
    document.getElementById("petrolAmount").innerHTML = money/petrol;
    document.getElementById("moneyLeftOutput").innerHTML = (money%petrol);

}