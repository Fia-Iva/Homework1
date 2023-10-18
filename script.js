let a=10;
alert(a);
a=20;
alert(a);
const b=2007;
alert(b);
const js="Брендoн";
alert(js);
let d=10;
let d2=2;
alert(d/d2);
alert(d+d2);
alert(d-d2);
alert(d*d2);
let set=2
let result=2**5;
alert(result);
let a2=9;
let b2=2;
alert(a2%b2);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);
let age=prompt('Сколько вам лет?');
user = {
    name:"София",
    age:23,
    isAdmin:true,
}
user.cityofresidence ="Москва";
user.age =25;
delete user.cityofresidence;
let info= prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
let nam=prompt('Как вас зовут?');
alert('Привет, ${nam}!');
let password ='Пароль';
let massege= prompt('Введите пароль');
if(massege == password){
    massege='пароль введен верно';
}else {
    massege='пароль введен неверно';
}
alert(massege);
let c=3;
if(c>0 && c<10){
    echo='верно';
}else{
    echo='неверно';
}
let d3=8;
let e=108;
if(a>100 || d3>100){
    echo='верно';
}else{
    echo='неверно';
}
let aa= '2';
let bb= '3';
alert(Number(aa) + Number(bb));
let monthNumber = (prompt('к какому сезону этот месяц принадлежит'));
switch(monthNumber){
    case'декабрь':
    console.log('зима')
    break;
    case'январь':
    console.log('зима')
    break;
    case'февраль':
    console.log('зима')
    break;
    case'март':
    console.log('весна')
    break;
    case'апрель':
    console.log('весна')
    break;
    case'май':
    console.log('весна')
    break;
    case'июнь':
    console.log('лето')
    break;
    case'июль':
    console.log('лето')
    break;
    case'август':
    console.log('лето')
    break;
    default:
        console.log('ввел что-то не то')  
    break;
}
for (let i = 10; i > 0; i--){
    console. log (i);
     console. log ("Привет"); 
    }
    for (let i = 1; i <= 5; i++){
    console. log(i) ;
    }
    for (let i = 7; i <= 22; i++) { 
    console. log(i) ;
    }
    let obj ={
    Коля: "200",
    Вася: "300",
    Петя: "400",
    }
    for (let key in obj) {
    console. log('${key} - зарплата ${obj [key]} долларов.');
    }
    let n = 10000;
    let ne = 0;
    while(n >= 50){
        n /= 2;
        ne ++;   
    }
    console. log(n) ;
    console. log(ne) ;
    let firstFriday = 5 ;
    for (let i =firstFriday; i <= 31 ;i += 7 ){
        console. log('сегодня пятница,${i}-e число.Необходимо подготовить отчет. ') ;  
    }