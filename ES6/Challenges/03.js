//Converta as funções nos seguintes trechos de código em Arrow Functions:

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
    return item + 10;
   });

const arr2 = arr.map(item => item + 10);

console.log(arr2)