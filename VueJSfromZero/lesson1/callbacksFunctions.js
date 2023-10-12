
const names = ['Tima', 'Abay', 'Alisher', 'Maks']; // => [4, 4, 7, 4] 

let newArr = [];

for (let i = 0; i < names.length; i++) {
    newArr.push(names[i].length);
};
console.log(newArr);
//--------------
let newArr2 = [];

for (let i = 0; i < names.length; i++) {
    newArr2.push(names[i].toUpperCase()); // => [верхний регистр]
};
console.log(newArr2); // МОЖНО ВСЕ ЭТО СДЕЛАТЬ ПО КОРОЧЕ ИСПОЛЬЗУЯ ФУНКЦИИ ВЫСШЕГО ПОРЯДКА!!!


// Функции высшего порядка - callback functions
function mapArray(names, fn) {  // принимает сам массив и функцию
    const res = [];
    for (let i = 0; i < names.length; i++) {
        res.push(fn(names[i]));
    }
    return res;
};

function nameLength(element) {
    return element.length; // тут мы элемент это данные массива - имена
};

function nameToUpperCase(element) {
    return element.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);

console.log(result);
console.log(result2);


// ИЗ ОДНОЙ ФУНКЦИИ МОЖНО ВЕРНУТЬ ДРУГУЮ ФУНКЦИЮ
function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
};

const testGreeting = greeting('Tamerlan');
const fullName = testGreeting('Abdibek');

const fullName2 = greeting('Tamerlan')('Abdibek'); // *Можно сразу же передать аргументы второй функции 

console.log(fullName);
console.log(fullName2);

//2
function question(job) {
    const jobDictionary = {
        developer: 'что такое Javascript?',
        teacher: 'какой предмет вы ведете?',
    }
    /*if (job === 'developer') {
        return function (name) {
            return `${name}, что такое Javascript?`;
        };
    }   else if (job === 'teacher') {
        return function (name) {
            return `${name}, какой предмет вы ведете?`;
        };
    }*/

    return function(name) {
        return `${name}, ${jobDictionary[job]}`; //можно использовать объект чтобы упростить код
    };
};

const developerQuestion = question('developer');
console.log(developerQuestion('Tamerlan'));

const teacherQuestion = question('teacher');
console.log(teacherQuestion('Maks'));
