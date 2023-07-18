// //функция конструтор для прототипа
// логический функционал
function PrototypeMyArray(){
    this.push = function(value){
        this[this.length] = value;
        this.length++;
        return this.length;
    };
    this.test = function(){}
}

// данные
function MyArray(){
    this.length = 0;
}

//связываем данные с логическим функционалом
MyArray.prototype = new PrototypeMyArray();