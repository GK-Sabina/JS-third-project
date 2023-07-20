//мутация данных
// const arr1 = new Array(7, 4, 5);
// arr1[0] = 5555;
// arr1[0] = null;
// arr1[6] = 55;

// const arr2 = new Array(73, 44, 55);

// let arrCurrent = Math.random()>0.5 ? arr1 : arr2;
// arrCurrent[1] = 1000;
// console.log(arrCurrent.indexOf(5));

// if(Math.random()>0.5){
//     console.log(arr1.indexOf(5));
// }else{
//     console.log(arr2.indexOf(5))
// }

//slice
// const arr1 = [1,2,3,4,5,6,7,8,9];

// const sliceArr1 = arr1.slice(); //slice возвращает поверхностную копию массива
// const sliceArr2 = arr1.slice(2); //срезали часть с 0 до 2
// const sliceArr3 = arr1.slice(2, 7); //срезали с 2 до 7

// console.log(arr1); //[1,2,3,4,5,6,7,8,9];
// console.log(sliceArr1); //[1,2,3,4,5,6,7,8,9];
// console.log(sliceArr2);//[3,4,5,6,7,8,9];

//splice
// const arr2 = [1,2,3,4,5,6,7,8,9];

// const start = 3;
// const deleteCount = 2;

// // const spliceArr1 = arr2.splice(start); //разделяет массив начиная с 3 тк start=3
// // const spliceArr1 = arr2.splice(start, deleteCount); //удалили 2 и 3 индекс
// const spliceArr1 = arr2.splice(start, deleteCount, '+') // удалили 2 и 3 индекс и вставили туда +

// console.log(arr2); 
// console.log(spliceArr1); 

//сделать так чтобы было:
//Task1 1,2,3  
//Task2  1,4,5   
//Task3  1, 'a', 'b, 5

const arr1 = [1,2,3,4,5];

//Task 1 
// const start = 3;
// const spliceArr1 = arr1.splice(start);
// console.log(arr1); //1, 2, 3
// console.log(spliceArr1); 

//Task 2
// const start = 1;
// const deleteCount = 2;
// const spliceArr1 = arr1.splice(start, deleteCount);
// console.log(arr1); //1, 4, 5
// console.log(spliceArr1); //2, 3

//Task 3
// const start = 1;
// const deleteCount = 3;
// const spliceArr1 = arr1.splice(start, deleteCount, 'a', 'b')
// console.log(arr1); //1, 'a', 'b', 5
// console.log(spliceArr1); //2, 3, 4

//join
const arr2 = [1,2,3,4,5];

const strArray1 = arr2.join(':'); //переобразовываем массив 

console.log(strArray1) //1:2:3:4:5