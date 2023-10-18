// Перебирающие методы массивов

const users = [
    {
      _id: "5cdce6ce338171bb473d2855",
      index: 0,
      isActive: false,
      balance: 2397.64,
      age: 39,
      name: "Lucile Finley",
      gender: "female",
      company: "ZOXY",
      email: "lucilefinley@zoxy.com",
      phone: "+1 (842) 566-3328",
      registered: "2015-07-12T09:39:03 -03:00"
    },
    {
      _id: "5cdce6ce0aa8d071fa4f4cc5",
      index: 1,
      isActive: true,
      balance: 2608.48,
      age: 33,
      name: "Woodward Grimes",
      gender: "male",
      company: "FORTEAN",
      email: "woodwardgrimes@fortean.com",
      phone: "+1 (960) 436-3138",
      registered: "2014-09-08T03:24:39 -03:00"
    },
    {
      _id: "5cdce6ce103de120d32d6fe4",
      index: 2,
      isActive: true,
      balance: 1699.99,
      age: 25,
      name: "Robinson Coleman",
      gender: "male",
      company: "GENMOM",
      email: "robinsoncoleman@genmom.com",
      phone: "+1 (852) 543-3171",
      registered: "2019-04-23T08:24:58 -03:00"
    },
    {
      _id: "5cdce6cebada7a418d8ccb3d",
      index: 3,
      isActive: true,
      balance: 2621.84,
      age: 25,
      name: "Austin Benton",
      gender: "male",
      company: "ZILIDIUM",
      email: "austinbenton@zilidium.com",
      phone: "+1 (977) 573-2627",
      registered: "2016-08-02T10:08:24 -03:00"
    },
    {
      _id: "5cdce6ced81fe99596d9cef5",
      index: 4,
      isActive: true,
      balance: 1297.31,
      age: 37,
      name: "Casandra Stout",
      gender: "female",
      company: "ANACHO",
      email: "casandrastout@anacho.com",
      phone: "+1 (929) 465-3804",
      registered: "2018-04-14T11:27:26 -03:00"
    },
    {
      _id: "5cdce6ce6c3ae6c4d6f39e88",
      index: 5,
      isActive: false,
      balance: 2165.49,
      age: 20,
      name: "Valencia Carrillo",
      gender: "male",
      company: "XEREX",
      email: "valenciacarrillo@xerex.com",
      phone: "+1 (977) 522-3378",
      registered: "2014-02-14T11:45:27 -02:00"
    }
  ];

// ForEach - метод перебора массива, ничего не возращает. Замена цикла for
users.forEach((user, index, arr) => {
    //console.log(user, index, arr);
})
// filter - фильтрация массива
const userLess30 = users.filter(user => user.age < 30); // фильтр возращает новый массив в который войдут только те элементы для которых переданный коллбек внутри фильтра вернул true
console.log(userLess30);

const userActive = users.filter(user => user.isActive); // isActive - true
console.log(userActive);

// map - позволяет создать новый массив из того что будет возращать коллбек переданный в него
const userName = users.map(user => user.name); // возращает новый массив только с именами users.name с объекта users
console.log(userName);

const userAge = users.map(user => user.age); // возращает новый массив только с возрастом users.age с объекта users
console.log(userAge);

const userNameAndAge = users.map(user => ({ name: user.name, age: user.age })); // мы можем часть из объекта взять в отдельный массив из объектов
console.log(userNameAndAge);

// reduce - помогает преобразовать массив, помогает формировать структуры, например объект, чтото посчитать и тд
const totalBalance = users.reduce((acc, user) => {
    return acc += user.balance; // начинает с 0 далее прибавляет каждый баланс на следующий
}, 0) // acc - акумулятор, стартовое значение, переменная в котором будет хранится результат предыдущей итерации
console.log(totalBalance); // сумма всех балансов

const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {});
console.log(usersObj);

// some/every - есть ли один элемент/все элементы удовлетворяет условия коллбека
const isSomeMale = users.some(user => user.gender === 'male'); // вернет true потому что хотябы у одного есть male
console.log(isSomeMale);

const isEveryMale = users.every(user => user.gender === 'male'); // вернет false потому что не все люди male, есть и female
console.log(isEveryMale);

const isAll18 = users.every(user => user.age > 18); // вернет true потому что все пользователи старше 18 лет
console.log(isAll18);

// sort - сортировка массива, изменяет исходный массив
const names = ['Tima', 'Maks', 'Bill'];
names.sort();
console.log(names);

const numbers = [10, 7, 44, 50]; 
numbers.sort((prev, next) => prev - next); // prev - 10, next -7. Если 10-7>0 true, он меняет пару местами
console.log(numbers);

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age); // сортирует объекты по возрасту пользователя

// find - поиск элемента из массива
const user = users.find(user => user.name === "Valencia Carrillo"); // принимает элемент массива, возращает объект с именем "Valencia Carrillo"
console.log(user);
