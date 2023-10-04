console.log('Hello world');

//Типы данных в Javascript
/**
 * 1. Примитивные
 * - Number: 2023, 1.5, NaN, Infinity
 * - String: 'Hello', "world", `Hello`
 * - Boolean: true, false
 * - Null: Null
 * - Undefined: undefined
 * - Symbol()
 */
console.log(15);
console.log('Hello world', `Mir`, "Tima");
console.log(2>1); // true
console.log(10/0); // infinity
console.log('ivan' * 2); // NaN


/**
 * 2. Объекты
 * - Object: { name: 'Ivan', age: 20}
 * Array : [1,2,3,name]
 * Function: function foo() {}
 * Date: new Date()
 */

console.log({'name': 'Tima', 'age': 28}); //object
console.log([1,2,3]); // массив
console.log(new Date()); // сегодняшняя дата



// ПЕРЕМЕННЫЕ
let car = 'Audi';
let userName = 'Tamerlan';
const userAge = 28;

console.log(car, userName, userAge);

const user = {
    name: 'Tamerlan',
    age: 28,
    car: 'BMW E39',
    topColors: [
        'red',
        'blue',
        'black'
    ]
}
user.fullName = user.name + 'Abdibek'; // можно добавлять данные
user.age = 29; // можно изменять данные внутри объекта
console.log(user);



//Преоброзавание типов
let value;
//number to string
value = String(10);
value = String(10+50);
value = (40).toString() // метод
// Boolean to string
value = String(true);
// Array to string
value = String([1, 2, 3]);
// Objects to string
value = String({ name: 'Tamerlan'});
value = 30 + '' + 30; // конкатенация число + строка => string
value = 30 - 'str';// NaN not a number
value = 30 - '5'; //25 -/* number если может если нет => NaN
value = true + 10; // true = 1, false = 0
value = true + undefined; // NaN
// String to number
value = Number('25');
value = Number(true); // 1
value = Number(null); // 0
value = Number('Hello'); // NaN
value = parseInt('200nasd'); // number
value = parseInt('asdas200n'); // NaN
value = parseFloat('200.245sad') // 200.245 дробные числа
//Boolean
value = Boolean('asd'); // любая не пустая строка будет считаться true
value = Boolean(''); // пустая строка считается false, кроме пробела
value = Boolean(0); // 0 only False
value = Boolean(undefined); // only false
value = Boolean(null); // null - false
value = Boolean({ }); // массивы и объекты всегда true даже если пустые
value = Boolean([ ]);

console.log(value);
console.log(typeof value); // определяет тип данных



// NUMBERS - подробно!!
const num1 = 10;
const num2 = 20;
let sum = num1 + num2;
sum = sum + 100; // можно sum += 100 standart
console.log(sum);
val = 4 % 2; //остаток от деления
console.log(val); 
val++; // increment val-- dicrement
++val; // изменения произойдут сразу же
console.log(val);
val = 0.6 + 0.7; // не точные вычисления
console.log(val); // 1.2999999999 и тд и можно решить двумя основными способами ->
val = parseFloat(val.toFixed(1)); // первый способ
val = ( 0.6 * 10 + 0.7 * 10) / 10; // второй способ
console.log(val); 
//Объект Math для работы с числами
let some = Math.random(); // рандомные числа от 0 до 1
console.log(some);
some = Math.round(2.4); // округляет в меньшую сторону если <0.5 и в большую если >0.5
some = Math.ceil(2.1); // округление в большую сторону
some = Math.floor(2.8); // округление в меньшую сторону
some = Math.min(1,2,34,8,7); // возращает наименьшее число
some = Math.max(1,2,34,8,7); // возращает max число
console.log(some);

const arr = ['black', 'red', 'blue','green', 'white', 'brown', 'pink'];
color = Math.floor(Math.random() * arr.length);
console.log(color, arr[color]);



// РАБОТА СО СТРОКАМИ STRING!!!
const firstName = 'Tamerlan';
const lastName = 'Abdibek';
const age = 30;
let str = 'Hello my name is Tamerlan';

let person;
person = firstName + ' ' + lastName;
person = firstName.length; // количество символов
person = firstName[firstName.length - 1]; // получаем последнюю букву или символ 
// toUpperCase, toLowerCase
person = firstName.toUpperCase(); // преобразовывает буквы в верхний регист
person = firstName.toLowerCase(); // в нижний регистр

person = firstName.concat(' ', lastName); //объединение строк
person = firstName.indexOf('n'); // вернет индекс символа в строке (но если таких несколько то он вертен только первое вхождение)
person = str.includes('my'); // ищем есть ли такое значение в строке / чувствительны регистру
console.log(str);
console.log(person);

person = str.slice(0, 5); // вырезает строку с начального значения до какого--то
console.log(person);

person = str.replace('Tamerlan', 'Tima'); // меняет значение на новое. Сперва пишем что мы хотим заменить на чего.
console.log(person);




// ШАБЛОННЫЕ СТРОКИ с ES6
const fName = 'Tamerlan';
const lName = 'Abdibek';
const uAge = 28;

let one;
one = 'Hello my name is ' + fName + ' ' + lName; // ES5
console.log(one);

one = '<ul>' + 
      '<li>First name: ' + fName + '</li>' 
       + '<li>Last name: ' + lName + '</li>' 
       + '<li>Age: ' + uAge + '</li>' +
      '</ul>';
document.body.innerHTML = one; // добавили в HTML документ // ES5!!

one = `
    <ul>
        <li>First name: ${fName}</li>
        <li>Last name: ${lName}</li>
        <li>age: ${age}</li>
        <li>random: ${Math.floor(Math.random() * 10 + 1)}</li>
    </ul>
`;
document.body.innerHTML = one; // ЭТО УЖЕ СПОСОБ В ES6 (EcmaScript 2015)