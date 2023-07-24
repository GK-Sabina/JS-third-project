// //hight order function 
// /**
//  * 
//  * @param {function} howSay 
//  * @param {string} whatSay 
//  */
// function saySomething(howSay, whatSay = 'hi') {
//     howSay(whatSay);
// }
// saySomething(alert, 'hello')

//forEach
// const arr1 = [1,2,3,4,5];

// function getSquare(value){
//     console.log(value * value);
//     return value * value;
// }
// function getSum(value){
//     console.log(value + value);
//     return value + value;
// }

// // for(let index = 0; index < arr1.length; index++){
// //     getSquare(arr1[index]);
// // }

// // arr1.forEach(getSquare); //перебираем массив и применяем свойство function getSquare

// //приминяем forEach для const myArr1 = new MyArray()
// arr1.forEach(function(currentElement){
//     console.log(currentElement)
// });

// arr1.forEach(getSum)

// const myArr1 = new MyArray(4, 8, 6);
// myArr1.forEach(getSquare);

// myArr1.forEach(function(currentElement){
//     console.log(currentElement)
// });

//forEach practic, делаем подписку всем пользователям
// const users = [{name: 'Tom'}, {name: 'Brad'}, {name: 'Rob'} ];

// users.forEach(function(user){
//     user.isSubscribe = true;
// })

//every
//some
// const arr1 = [21, 4, 8];

// const isEven = function(number){
//     return number % 2 === 0;
// };
// console.log(arr1.some(isEven)); //true, нужно чтобы хотя бы одно подошло и true вернется 
// console.log(arr1.every(isEven)); //false, нужно чтобы все подошли и тогда вернется true

//filter
// const arr2 = [21, 4, 83];

// const isEven = function(number){
//     return number % 2 === 0;
// };

// const arrEven = arr2.filter(isEven);

// console.log(arr2);
// console.log(arrEven); //4 тк к условию подошел только этот элемент

//map
// const arr2 = [21, 4, 83];

// const getSquare = function(number){
//         return number * number;
//     }

// const arrNew = arr2.map(getSquare);
//  console.log(arrNew); //[441, 16, 6889] создает новый массив

// const arrNew2 = arr2.map(function(elem){
//     return {prop:elem};
// })

// console.log(arrNew2);

//Task map, чтобы возвращались пользователи только с подпиской
// const users = [{name: 'Bob', age:45}, {name: 'Tom', isMale: true}, {name: 'Rob'} ];

// const usersWithSubscribe = users.map(function(user){
//     const newUser = {}
//     // newUser.name = user.name;
//     for (const key in user){
//         newUser[key] = user[key]; //обращаемся ко всем свойствам объекта 
//     }
//     newUser.isSubscribe = false;
//     return newUser;
// });

// console.log(users);
// console.log(usersWithSubscribe);

//sort
// const arr1 = [21, 4, 8, 61];
// console.log(arr1);

// arr1.sort();
// console.log(arr1); //[21, 4, 61, 8] сортирует по первому символу поэтому поменялись только 8 и 61 тк 6 меньше 8

// //функция для сортировки чисел который принятый для чисел, sort
// // function compareNumbers(a, b){
// //     return a - b;
// // }

// //или

// function compareNumbers(a, b){
//     if(a > b){
//         return 1; //first b then a
//     }
//     if(b > a){
//         return -1; //first a then b
//     }
//     if(a === b){
//         return 0;
//     }
// }

// const arr2 = [21, 400, 8, 61];

// arr2.sort(compareNumbers);
// console.log(arr2); //[8, 21, 61, 400]

//Task, sort, отсортировать по имени и возрасту
// const users = [
// {name: 'Tom', isMale: true}, 
// {name: 'Rob'}, 
// {name: 'Bob', age:45}, 
// {name: 'Fred', age: 15} 
// ];

// const newUsersSortByName = users.sort(function(user1, user2){
//     if(user1.name > user2.name){
//          return 1; 
//         }
//         if(user1.name > user2.name){
//          return -1;
//         }
//          return 0;
// })


// const newUsersSortByAge = users.soft(function(user1, user2){
//     return user1.age - user2.age;
// })


// Task Є массив [1,2,3,1,5,6,1,2,5], треба використовуючи цей масив створити новий, в якому будуть присутні тільки ті значення які повторюються.
// Результат буде [1,2,5]
// Якщо в джерельному масиві усі значення унікальні, то створюєте новий пустий масив.

function getArrayOfNotUniqueNumbers(array) {
    const result = [];

    array.forEach(function(element) {
        if (!result.includes(element) && array.indexOf(element) !== array.lastIndexOf(element)) {
            result.push(element);
        }
    });

    return result;
}

console.log(getArrayOfNotUniqueNumbers([1,2,3,1,5,6,1,2,5]));