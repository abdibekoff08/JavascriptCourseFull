const obj = {
    name: 'Tamerlan',
    age: 28,
    isAdmin: true,
    email: 'test@test.com',
    'user-address': {
        city: 'Almaty',
        country: 'Kazakhstan'
    },
    skills: ['HTML', 'CSS', 'JS']
};
let objValue;
objValue = obj.name;
objValue = obj['email'];
objValue = obj['user-address'].city; // получаем нужные значения
let prop = 'email';
objValue = obj[prop];
console.log(obj);
console.log(objValue);
//Запись и перезапись свойств в объекты
obj.name = 'Tima'; // перезапись свойства name
console.log(obj.name);
obj.lastName = 'Abdibek'; //добавляем новое свойство lastName в наш объект
obj['user-address'].city = 'Taraz'; // изменяем вложенные свойства
obj['user-address'].street = 'Kazibek bi'; // добавляем новые свойства во вложенные объекты
console.log(obj);


