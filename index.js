//Task1 приветствие пользователя
// const user1 = {
//     firstName: 'Brad',
//     lastName: 'Pitt',
//     age: 63,
//     isMale: true,
// };

// const user2 = {
//     firstName: 'Tom',
//     lastName: 'Rot',
//     age: 63,
//     isMale: true,
// };

// function hiUser(objUser){ //objUser = user1
//     objUser.age = 10; //перезаписали user1 и user2 тк обращались в функции к user
//     return `Hi, ${objUser.firstName} ${objUser.lastName}`;
// }

// console.log(hiUser(user1))
// console.log(hiUser(user2))


//Task2 сравнение объектов и копирование
// const pr1 = 3;
// const pr2 = 3;

// console.log(pr1 === pr2); //true

// const obj1 = {
//     prop: 1
// }

// const copyObj = obj1;

// const obj2 = {
//     prop: 1
// }

// console.log(obj1 === obj2); //false тк сравнивается адрес объектов а он разный

// console.log(obj1.prop1 === obj2.prop1); //true тк сравниваем свойства а они одинаковые

// console.log(obj1 === copyObj); //true когда копируем переменную то он копирует адрес или ссылку или ярлык, еще один способ copyObj обратиться к obj1



//вычисляемые свойства
// const user1 = {
//     firstName: 'Brad',
//     lastName: 'Pitt',
//     age: 63,
//     'is Male': true,
//     123: 456,
//     0: 'zero',
// };

// const nameUserProp = prompt('enter name');
// user1[nameUserProp] = 'one two';
// user1.prop1 = 45;
// user1['two words'] = 'one two'; //добавляем свойства название которого состоит из 2 слов 
// user1[48] = null; //добавляем свойства название которого состоит с цифр

// // const nameProp = 'is male';
// // console.log(user1[nameProp]); //true [] вычисляют значение и подставляют его
// // console.log(user1['is male']); //true

// // const number = 123;
// // console.log(user1[number]); //456
// // console.log(user1[123]);  //456

// // console.log(user1.firstName);
// // console.log(user1[0]); //zero
// // console.log(user1['0']); //zero
// // console.log(user1[123]); //456
// // console.log(user1['is male']); //true


//функция которая создает объект семья, ключами будут имена, значение - член семьи
// function createObjFamily(members = 3){
//     const family = {};
//     for(let i=0; i<members; i++){вмест
//         const nameMember = prompt('Enter name member');
//         const statusMember = prompt('Enter status member');
//         family[nameMember] = statusMember;
//     }
//     return family;
// }

// const userFamily = createObjFamily();
// console.log(userFamily);

// оператор in 
const year = { 
    winter: 'cold',
    spring: 'not cold',
    summer: 'hot',
    autumn: 'not hot',
};

const curSezon = 'winter';
// console.log(curSezon in year); //true тк подставляется значение summer

// console.log('winter'in year); //true
// console.log(winter in year); //ошибка не правильный ввод 

if(curSezon in year){
    console.log(year[curSezon]);
}else{
    console.log('error');
}                         //cold //проверяем существует ли свойство


//цикл свойств определенного объекта, for in
for(const key in year){   //key = 'winter'
    console.log(`${key} : ${year[key]}`) //выводит все свойства и значение объекта year, вместо key может быть любое название 
}

