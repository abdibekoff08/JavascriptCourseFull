// >, <, <=, >=, ==, ===, !=, !==

let value;
value = 1 > 2; // false
value = 2 <= 2; // true
value = 1 == 1; // true
value = 1 == '1'; // true - не проверяет на тип данных
value = 1 == true; // true
value = 1 === '1'; // false - проверяет на тип данных - строгая проверка
value = 1 != '1'; // false
value = 1 !== '1'; // true
value = 'a' > 'a'; // false - в числовом формате UNICOD они равны
value = 'a' > 'A'; // true
value = 'a' > 'ab'; // false
value = 'a'.charCodeAt(); // возращает числовое значение символа в UNICOD
console.log(value);

// IF, ELSE
/* if (условие / любое выражение) { действие выполнится если будет true
     ваш код
} else {
     другие действия
}*/
value = 10;

if (value !== 10) {
    console.log('TRUE');
}   else {
    console.log('FALSE'); // FALSE
};

if (value) {
    console.log('some actions', value);
}   else {
    console.log('ELSE');
}

// || && ! - или, и, не
value = null;
if (!value) {
    console.log(value);
};

value = [];
if (value.length) {
    console.log(value)
}   else {
    console.log('array is empty'); // массив пуст
};

let user = {
    name: 'Tima'
};

if (user.hasOwnProperty('name')) { // есть ли у объекта данное свойство
    console.log(user.name);
}   else {
    console.log('false');
};

// оператор И (&&) запинается на лжи, оператор или (||) запинается к правде
value = 1 || 0 || 0;
console.log(value); // возращает true - 1

let age = 10;
if (age < 16 || age > 65) { // 10 < 16 true
    console.log('some actions');
}   else {
    console.log('else');
};

let serverNickname = 'Tima';
let nickname = serverNickname || 'default nickname';
console.log(nickname);

// Оператор И (&&)
value = 1 && 0 && 3;
console.log(value); // возращает 0 - false
value = 2 && 3 && 20;
console.log(value); // возращает 20 потому что все true

let productPrice = 10;
if (productPrice >= 5 && productPrice <= 20) { // все условия выполняются так как 10 > 5 и 10 < 20
    console.log('Покупаю!');
}   else {
    console.log('Не покупаю!');
};

value = 10; 
if (value < 10) {
    console.log('value < 10', value);
}   else if (value > 10) {
    console.log('value > 10', value);
}   else {;
    console.log('value = 10', value);
};



// ТЕРНАРНЫЙ ОПЕРАТОРЫ!!
let a = 1;
let b = 0;
/*if (a > 0) {
    b = a;    
}   else {
    b += 1; 
};
console.log(b);*/ 
// ВЫРАЖЕНИЕ ? ЕСЛИ TRUE : ЕСЛИ FALSE
// ВЫРАЖЕНИЕ ? ЕСЛИ TRUE : ВЫРАЖЕНИЕ ? ЕСЛИ TRUE : ЕСЛИ FALSE
b = a > 0 ? b = a : b += 1;
b = a > 0 ? 2 : a < 0 ? 3 : 0;
console.log(`b: ${b}`);


// SWITCH CASE !!! Конструкция switch заменяет собой сразу несколько if.
//Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
//Синтаксис
//Конструкция switch имеет один или более блок case и необязательный блок default.
let color = 'orange';

switch(color) {
    case  'red':
    case 'orange':    // Можно группировать КЕЙСЫ
        console.log('Color is red or orange');
        break;
    case 'yellow':
        console.log('Color is yellow');
        break;
    default: 
        console.log('Default'); 
};