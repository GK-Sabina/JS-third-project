// //функция конструтор для прототипа
// логический функционал
function PrototypeMyArray(){
    this.push = function(value){
        this[this.length] = value;
        this.length++;
        return this.length;
    };
    this.toString = function(){
        let stringArray = '';
        for (let index = 0; index < this.length; index++){
            if(index === this.length - 1){ //чтобы в последнем не ставилась ','
                 stringArray += this[index];
            } else {
                 stringArray += this[index] + ',';
            }
        }
        return stringArray;
    }
}

// данные
function MyArray(){
    this.length = 0;
}

//связываем данные с логическим функционалом
MyArray.prototype = new PrototypeMyArray();

const myArr1 = new MyArray();
myArr1.push(12);
myArr1.push(34);
myArr1.push(23);
// console.log(myArr1);
// console.log(myArr1.toString());