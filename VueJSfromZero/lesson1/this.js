// this - контекст вызова функции
//function getThis () {
    //console.log(this); // window on browser
//};
//getThis();


const prod1 = {
    name: 'intel',
    price: 100,
    getPrice,
    getName,
    info: {
        information: ['2.3 GHz'],
        getInfo: function () {
            console.log(this);
        }
    }
};

function getPrice (currency = '$') {
    console.log(currency + this.price);
    return this;
};

function getName () {
    console.log(this.name);
    return this;
}

//prod1.getPrice(); /100
//prod1.info.getInfo();
//prod1.getName(); /intel

const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice,
};

prod2.getName = prod1.getName;

prod2.getPrice();
prod2.getName(); //AMD

//---------------------------
let str = 'Hello world';
const reversedStr = str.split('').reverse().join(''); // вызов методов цепочкой. 
//console.log(reversedStr);

const prod3 = {
    name: 'Qualcom',
    price: 200,
    //getPrice,
    //getName,
};

//getPrice.call(prod3, 'KZT');
getPrice.apply(prod3, ['KZT']);

//prod3.getName().getPrice();


