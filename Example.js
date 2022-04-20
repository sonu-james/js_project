//function
console.log("hai");
function sum(num1,num2){
  return(num1+num2);
}
sum(4,5);
console.log(sum(4,5));

//greetings
var name=prompt("What is your name?");

function greetings(yourName){
    console.log("Hello"+" "+yourName);

}

greetings(name);

//loops
//while loop
var i=0;
while(i<10){
    i++;
    console.log(i);
}
//for loop
for(let i=0;i<=10;i++){
    console.log(i);
}  

//data types
//let yourAge =30;//number
//let  name1='sonu';//string
//let name={first:'sonu',last:'nirmal'}//object
//let truth=false;//boolean
//let fruits=['apple','banana','orange'];//array
//let random;//undefined
//let nothing=null; //value null

//strings operations  in js(common methods)
let fruit ='banana';
let fru ='banana,apple,guva';
let moreFruits ='banana\napple';

console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','son'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fru.split(',')); //split by comma
console.log(fruit.split('')); //split by comma


//array
let fruits = ['banana','apple','orange','guva'];
fruits =new Array('banana','apple','orange','guva');

console.log(fruits[2]);

fruits[0]='pear';
console.log(fruits);

for( let i = 0;i < fruits.length; i++)
{
    console.log(fruits[i]);
}


