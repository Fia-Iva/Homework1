let arr = [1, 5, 4, 10, 0, 3];
for(let item of arr){
    if(item == 10)
    console.log(item);{
        break;
    }
}


let arr = [1, 5, 4, 10, 0, 3];
for(let item of arr) {
  if (item == 4)
  console.log(arr.indexOf());{ 
    break;
  }
}


let arr = [1, 3, 5, 10, 20];
let str = arr.join('');
console.log(str);


const result = [];
for(let i = 0; i < 3; i++){
    result[i] = [];
    for(let j = 0; j < 3; j++){
        result[i] [j] = 1;
    }
}
console.log(result);


let arr = [1, 1, 1];
arr.push(`2`, `2`, `2`);
console.log(arr);


const arr = [9, 8, 7, 'a', 6, 5];
const result = arr.filter(item => !isNaN(item));
console.log(result);


const arr = [9, 8, 7, 6, 5];
let a = prompt(`угадай число`);
a = arr.includes(7);
alert(`угадал`);
a = arr.includes(1);
alert(`не угадал`);

let str = 'abcdef';
let arrStr = str.split(``).reverse().join(``);
console.log(`"${arrStr}"`);


let arr = [[1, 2, 3,],[4, 5, 6]];
console.log(arr.flat());


let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length - 1; i++){
    console.log(arr[i] + arr[i + 1]);
}


let arr = [1, 5, 4, 10, 0, 3];
const result = arr.map(i => i*i);
 console.log(result);


let arr = (['слово', '', 'слог', 'длинное предложение', 'буква']);
const result = arr.map(s => s.length);
console.log(result);


let arr = [-1, 0, 5, -10, 56];
const result = arr.filter(i => i < 0);
console.log(result);