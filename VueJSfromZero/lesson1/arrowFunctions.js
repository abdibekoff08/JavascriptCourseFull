// Arrow functions ES6
const square = (a) => a * a; // короткая запись когда надо выполнить лишь одно действие
const squareRes = square(5);
console.log(squareRes);

//---------------
const withoutArgs = () => console.log('Hello'); // без аргумента
const singleArg = x => x * 2; // когда только аргумент можно без круглых скобок

const moreActions = (c, d) => {
    c *= 2;
    d *= 3;
    return c + d;
};


const returnObj = (str = '') => { //возращает объект
    return {
        value: str,
        length: str.length,
    };
};
const returnStrObj = returnObj('Hello world');
console.log(returnStrObj);
