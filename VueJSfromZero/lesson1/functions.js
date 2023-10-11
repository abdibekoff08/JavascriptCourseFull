// FUNCTION DECLARATION
function sayHello(firstName, lastName) {
    console.log(firstName, lastName);
    return `Hello ${firstName} ${lastName}`; // после return функция дальше не выполнится!
};

let res = sayHello('Tamerlan', 'Abdibek') + '!';
console.log(res);
//Область видимости функции
let x = 10; 

function foo(x) { // <--- тут
    x = 5; 
    console.log(x); // выводит 5 потому что х определена внутри функции
    return x;
};

foo();
console.log(x); //выводит 10 потому что она обьявлена глобально
//-------------------------
const user = {
    name: 'Tima',
    age: 28
};

function getObj(obj) {
    obj.name = 'Tamerlan'; // меняет свойство name объекта user
};

getObj(user);
console.log(user);


//FUNCTION EXPRESSION 
const square = function(y) {
    return y * y;
};

console.log(square(5));


//ARGUMENTS
function arg() {
    console.log(arguments); // все аргументы переданные в фукнцию - массив аргументов
};
arg(10, 'string', [1, 2, 3]); // выводит аргументы в виде массивов