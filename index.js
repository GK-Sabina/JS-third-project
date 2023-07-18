
// //массивы, array
// // const arr1 = ['red', 'pink', 'aqua'];
// // const arr2 = new Array('red', 'pink', 'aqua');
// // const arr3 = [];
// // const arr4 = new Array(3); //создает 3 пустых ячейки в массиве

// // console.log(arr1===arr2); //false тк сравниваются адреса

// // console.log(arr1[1]); //pink

// // console.log(arr1[1]===arr2[1]); //true тк сравниваем примитивы 

// // const linkArr = arr1;
// // console.log(arr1===linkArr); //true тк адрес у них один


// //функция конструктор
// const arr1 = [];
// const arr2 = [];
// arr1.push(12);
// arr1.push(33);
// arr2.push('red');
// console.log(arr1.push === arr2.push); //true тк push объект и они имеют одну область память

// const prototypeMyArray = {};


// prototypeMyArray.push = function(value){
//     this[this.length] = value; //this[0] = value;
//     this.length++; //0++ => 1
//     return this.length; 
// }  //выносим push для экономии оперативной памяти 

// function MyArray(){
//     this.length = 0;
// }

// MyArray.prototype = prototypeMyArray;

// const arrMy1 = new MyArray();
// arrMy1.push(12);
// arrMy1.push(33);
// const arrMy2 = new MyArray();
// arrMy2.push('red');
// console.log(arrMy1);
// console.log(arrMy1.push === arrMy2.push); //true тк мы вынесли push





