function min(a,b){
    if (a>b){
  return b
    }else {
        return a
    }
}
console.log(min(12, 6));

function even_or_odd(n) {
    return n % 2 === 0 ? "Odd" : "Even";
}
console.log(even_or_odd(5));
console.log(even_or_odd(2));

function number(num) {
return num * num
}
console.log(number(6));

function number(a){
return a*a;
}
console.log(number(3));

function name(n){
  if(n<0){
    return "Вы ввели неправильное значение";
  }else if(0<n<13){
    return "Привет,друг";
  }else if(n>=13){
return "Добро пожаловать!";
  }
}

function reception(c,k){
  if (isNaN(c,k)){
  }else if(false){
    return "Одно или оба значения являются ине верными";
  }else if(true){
return"c*k";
  }
}
console.log(reception(2,5));
 

function cub(){
  let v = prompt (`Введите число`);
  let z = Number (v);
  if (isNaN(z)){
    return"Переданный параметр е является числом";
  }else{
let cube = z **3;
return`${z} в кубе рoвняется ${cube}`;
  }
  }

function getCirclePerimeter () {
return this.radius * this.pi * 2;
}
const circlet = {
radius: 10,
 pi: 3.14,
  getArea: getCircleArea,
   getPerimeter: getCirclePerineter,
};
const circle2 = {
radius: 5,
 pit: 3.14, 
 getArea: getCircleArea,
  getPerineter: getCirclePeriseter,
};
console. log (circlet.getArea ());
console. log (circlel.getPerimeter ()); 
console. log (circle2.getAres ());
console; log (circle2.getPerineter ());

let number = Number (prompt ("Введите номер месяца!"));
function date (number) {
if (number === 3 ||4|| 5) {
return " Это Весна!";
} else if (number === 6|| 7 ||8) {
return " Это Лето!";
} else if (number === 9|| 10 || 11) {
return
"Это Осень!";
} else if (number === 12 || 1 ||2) {
return
" это Зима!";
} else if (number >= 13) H
return
"Ошибка, такого месяца нет";
alert(date (number));
}
