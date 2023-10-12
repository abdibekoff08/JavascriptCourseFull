// ПРОСТЫЕ МЕТОДЫ МАССИВОВ
const numArr = [2, 5, 41, 33, 566];

let value;
//value = numArr.length; 
// numArr.length = 0; массив объект и мы можем менять свойства массива например длину!! 
value = Array.isArray(numArr);
numArr[2] = 10; // можем изменять данные из массивов 41 -> 10
value = numArr.indexOf(566); // можем найти индекс нужного нам элемента
console.log(value, numArr, numArr[2]); // можем получать определенные значения через индекс numArr[индекс]


// МЕТОДЫ ДОБАВЛЕНИЯ, УДАЛЕНИЯ, ИЗМЕНЕНИЯ МАССИВА
const nums = [2, 5, 1, 3, 6];
let pushArr, popArr, unshiftArr, shiftArr, sliceArr, spliceArr, reverseArr, concatArr,joinArr, splitArr;

pushArr = nums.push(55); // метод push добавляет элемент в конец массива
console.log(pushArr, nums);

popArr = nums.pop(); // метод pop ничего не принимает внутрь скобок и удаляет последний элемент массива
console.log(popArr, nums);

unshiftArr = nums.unshift(11); // метод unshift принимает значение и добавляет элемент вначало массива
console.log(unshiftArr, nums);

shiftArr = nums.shift(); // метод shift ничего не принимает и удаляет первый элемент массива
console.log(shiftArr, nums);

sliceArr = nums.slice(0, 2); // метод slice позволяет обрезать массив в нужном месте где первым указываем начальный индекс и вторым индекс конца который не включен в обрезку
console.log(sliceArr, nums);

spliceArr = nums.splice(1, 2, 'one', 'two'); // может удалять элементы по индексам и сразу же добавлять другие элементы на удаленных местах
console.log(spliceArr, nums);

reverseArr = nums.reverse(); // переварачивает массив, не очень хороший метод
console.log(reverseArr);

concatArr = nums.concat(numArr, 111, 222); // может объединять, копироватьи добавлять данные в массив
console.log(concatArr);

joinArr = nums.join(' '); // делает из массива строку
console.log(joinArr, nums);

let user = 'Tamerlan';
let user2 = 'Aknazar';
let full = 'Tamerlan Abdibek Programmer';
splitArr = user.split(); // позволяет из строки создать массив если ничего не передать то создаст массив из одного значения ['Tamerlan']
console.log(splitArr);
splitArr = user2.split(''); // если добавить пустую строку то создаст массив из каждого значения ['A', 'k', 'n', 'a', 'z', 'a', 'r']
console.log(splitArr);
splitArr = full.split(' '); // разделить каждые значения по пробелу ['Tamerlan', 'Abdibek', 'Programmer']
console.log(splitArr);


