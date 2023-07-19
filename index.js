//Task1 создать функцию конструктор для пользователя, написать в свойствах имя и возрас, фамилию. Метод вернуть полное имя. Метод вынести в прототип

// function User(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// function PrototypeUser(){
//     this.fullName = function(){
//         return this.firstName + ' ' + this.lastName;
//     };
//     this.toString = function(){
//         return `Info: name - ${this.firstName}`; //переписываем метод toString 
//     };
// }

// User.prototype = new PrototypeUser();

// const user1 = new User('Maks', 'Pitt', 30);
// const user2 = new User('Ann', 'Pit', 27);

// console.log(user1.fullName());
// console.log(user1.toString()); //метод объекта можно посмотреть через alert
// alert(user1);
// alert(user2);


//наследование литерально
// const man = {
//     fullName: function(){
//         return this.firstName;
//     },
//     speak: function(word){
//         return 'man speak: ' +word;
//     }
// }

// const user1 = {
//     firstName: 'Brad'
// }

// user1.__proto__ = man;

// console.log(user1)
// console.log(user1.fullName())


//Homework, Task1
//Cтворіть функцію конструктор Продукт з властивостями: назва(рядок), ціна(число), кількість(число - залишок на складі), знижка = 0 Cтворіть функцію конструктор прототипу Продукту з функціоналом:
//showInfo() - повертає рядок з усіма данними
//**setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну товару, з урахуванням зніжки
//**buyAmountProduct(amountValue) - повертає загальну вартість, якщо є достатня кількість, якщо не має повертаєте - null
//Не забути поєднати Продукт і його прототип! Створіть хоча б один продукт і викличте для нього усі методи.

function Product(name, price, quantity, discount = 0){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount; // %
}

function PrototypeInfoProduct(){
    this.showInfo = function(){
        return `
        ${this.name}
        price:${this.price}
        quantity:${this.quantity}
        discount:${this.discount}
        `;
    }
    this.getPriceWithDiscount = function(){
        return this.price - this.price * this.discount / 100;
    }
    this.setDiscount = function(value = 0){
        this.discount = value;
        return this.getPriceWithDiscount();
    }
    
    // this.validateNumber = function(value){
    //     return !Number.isNaN(Number(value)); //проверка на число
    // }

    this.buyAmountProduct = function(amountValue){
        if(amountValue > this.quantity) {
            return null;
        }

        this.quantity -= amountValue;

        return this.getPriceWithDiscount() * amountValue;
    } 
}

Product.prototype = new PrototypeInfoProduct();

const apple = new Product('Apple', 5, 10);

console.log(apple.showInfo());
console.log(apple.setDiscount(30)); //3.5
console.log(apple.showInfo());
console.log(apple.buyAmountProduct(20)); //null
console.log(apple.buyAmountProduct(5)); //17.5
console.log(apple.showInfo());