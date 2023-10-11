// while, do while, for, for of, for in

//WHILE
let x = 0; 
while(x < 10) {
    console.log(x);
    x++;
};

//DO WHILE 
let y = 5;
do {
    console.log('action');
    y++;
} while (y < 10);

//FOR
/*for (let i = 0; i < 10; i++) {
    console.log(i);
};*/
let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++) {
    res += str[i] + ' ';
};
console.log(res);
//----------------------
let colors = ['white', 'black', 'yellow','orange', 'green'];

for (let i = 0; i < colors.length; i++) {
    colors[i] = colors[i].toUpperCase();
}
console.log(colors);
//CONTINUE AND BREAK
for (let i =0; i < 10; i++) {
    if (i === 5) {
        continue; // продолжает цикл пропуская указанное значение
    }
    if (i === 7) {
        break; // останавливает цикл
    }
    console.log(i);
};

//------------
const users = [
    {
        name: 'Tima',
        age: 28
    },
    {
        name: 'Maks',
        age: 26
    },
    {
        name: 'Azamat',
        age: 25
    },
];
const usersObj = {};
for (let i = 0; i < users.length; i++) {
    usersObj[users[i].name] = users[i];
};
console.log(usersObj);

// FOR IN - для перебора объектов
for (let key in usersObj) {
    console.log(key);
    console.log(usersObj[key]);
}

// FOR OF - для перебора массивов
for (let value of users) {
    console.log(value);
}
