//Написати функцію checkValueInArray, яка приймає масив чисел і ключ(число), і повертає булеве значеня залежно від того чи присутній в масиві ключ.
//Написати функцію, яка приймає масив з числами і повертає true, якщо в масиві є два однакових числа поспіль, інакше повертає false. Якщо масив порожній також повертає false.
//викотристовувати методи масивів

/**
 * @param {Array<number>} array1
 * @param {number} key1
 */

const array1 = [11, 22, 33, 44, 55, 55];
const key1 = 33;

function checkValueInArray(array, key){
    return array.includes(key);
}
console.log(checkValueInArray(array1, key1));

function checkIdenticalValueInArray(array){
    for(let i = 0; i < array.length; i++){
            if(array[i] === array[i+1]){
                return true;
            }
    }
    return false;
}
console.log(checkIdenticalValueInArray(array1, key1));