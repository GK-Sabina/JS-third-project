//вызываем пустой объект
const obj1 = {};


// const obj2 и const obj3, одно и тоже, вызываем объект c помощью встроенных в js объектов
const obj2 = Object();
const obj3 = new Object();

//создание объекта
const cat = {
    name: 'Ray', 
    isMale: true,
    age: 1,
    isSleeping: false,
    talk: function(){
        return 'meow';
    }
};
console.log(cat.name);
console.log(cat.age);

console.log('cat', cat);

cat.age++;
console.log(cat.age);

delete cat.isSleeping;
console.log('cat', cat);

cat.color = 'wide';

//создать 2 кота, со свойствами
const secondCat = {
    name: 'Lala', 
    isFemale: true,
    age: 3,
    isSleeping: false,
    color: 'white',
    talk: function(){
        return 'meow meow';
    }
};

//создать объект кнопка, литерально, тот есть в ручную
const button1 = {
    content: 'submit',
    autoFocus: false,
    backColor: 'red',
    click: function(){
        return this.content;
    },
};
// button1.name = 'send';

const button2 = {
    content: 'reset',
    autoFocus: true,
    backColor: 'blue',
    click: function(){
        return this.content;
    },
};
const button3 = {
    content: 'subscribe',
    autoFocus: true,
    backColor: 'pink',
    click: function(){
        return this.content;
    },
};

//функция конструктор
function Cat(nameValue, isMale, age, isSleeping, color){
    this.name = nameValue;
    this.isMale = isMale;
    this.age = age;
    this.isSleeping = isSleeping;
    this.color = color;
    this.talk = function(){
        return 'meow';
    }
}

const cat1 = new Cat('Ray', true, 1, false, 'wide');
const cat2 = new Cat('Pushok', true, 3, true, 'gray');

//функция констктор для кнопки
function Button(content, autoFocus, backColor){
    this.content = content;
    this.autoFocus = autoFocus;
    this.backColor = backColor;
    this.borderStyle = 'solid'; //значения для всех
    this.amoutAngle = 4; //значения для всех
    this.click = function(){
        return this.content;
    }
}
const but1 = new Button('subscribe', true, 'pink');
const but2 = new Button('reset', true, 'red');

but1.borderStyle = ''; //перезаписываем значение для but1
but2.amoutAngle = 0; //перезаписываем значение для but2

//функция констуктор для пользователя
function User(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}
const user1 = new User('Maks', 'Pitt', 30);
const user2 = new User('Ann', 'Pit', 27);
const user3 = new User('Nina', 'Jon', 9);

console.log(user1.fullName());
console.log(user2.fullName());
console.log(user3.fullName());


//функция конструктор для страны
function Country(name, population, area){
    this.name = name;
    this.population = population;
    this.area = area;
    this.getInfo = function(){
        // return this.name + ' ' + 'population' + ':' + this.population + ' ' + 'area' + ':' + this.area;
        return `               //форматирование с помощью обратных скобк
        ${this.name}
        population:${this.population}
        area:${this.area}
        `;
    };
    this.getDensity = function(){
        return this.population / this.area;
    };
}

const county1 = new Country('USA', 336.700, 65.098);
const county2 = new Country('Ukraine', 123.800, 42.550);
const county3 = new Country('Romania', 67.800, 12.590);

console.log(county1.getInfo());
console.log(county1.getDensity());