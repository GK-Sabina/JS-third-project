// //перезаписываем для объекта
// const object = {pr1: 12, pr2: 23};

// function f1(obj) {
//     return (obj.key = 'qwerty');
// }

// f1(object);
// console.log(object);


// //перезаписываем для массива
// const obj2 = [12, 15, 4];

// function f1(obj){
//     return obj[0] = 888;
// }

// f1(obj2);
// console.log(obj2);


//массив
// const arr = [12,15,4];

// alert(arr);

// //конкатенация concat
// const array1 = [{prop:12} ,{name:'qwe'} ,{}];
// const array2 = ['d' ,'e' ,'f'];
// const array3 = array2.concat([4,5], 789, array2);
// const array4 = array2;

// // console.log(array3 === array2); //false, shelly copy
// // console.log(array2 === array4); //true, copy address
// array3[0] = 'w';
// array4[0] = 'q';

// console.log(array3);
// const array5 = array1.concat();
// console.log(array5);
// console.log(array1 === array5); //false, new address

// console.log(array5[0].prop); //12, обращаемся к массиву потом к свойству объекта
// console.log(array5[0]['prop']); //или так

// array5[1].name = 'Brad';
// console.log(array5[1].name); //Brad
// console.log(array1[1].name); //Brad, изменилось и там тк была поверхнастная копия const array5 = array1.concat();


//создаем пустой массив c 5 элементами, fill
const arr = new Array(5).fill({name:'noname'});
// arr.fill() //заполняет все элементы массива одним значением
console.log(arr);

//создаем массив, проверяем если ли 'key = 3' в массиве, indexOf, includes
const arr2 = [10,2,5,6,7,88];
const key = 5;
startIndex = 1;

console.log(arr2);
console.log(arr2.indexOf(key)) //2, возвращает значение индекс где находится key
console.log(arr2.indexOf(key, startIndex)) //2, startIndex указал откуда начинать поиск key

console.log(arr2.includes(key)) //true, выводит значение true или false если значение есть в массиве или нет
console.log(arr2.includes(key, startIndex)) //startIndex - откуда начинать поиск

//pop, shift, unshift
arr2.pop(); //удаляем последний элемент массива

arr2.shift(); //удаляет первый элемент массива

arr2.unshift(76); //добавляем 1 элемент в начало массива

//reverse
const arr3 = arr2.concat().reverse(); //переворачиваем и создаем копию массива arr2 - остается как был, а arr3 - меняет элементы первый теперь последний, а последний - первый
console.log(arr2);
console.log(arr3);


