prompt = require('prompt-sync')();

const num = Number(prompt('Please Enter Number '));

if (num % 3 === 0 && num % 5 === 0){
    console.log('fizzbuzz')
}
else if (num % 3 === 0){
    console.log('fizz')
}
else if (num % 5 === 0){
    console.log('buzz')
}
else{
    console.log('error not divisible by predetermined numbers')
}