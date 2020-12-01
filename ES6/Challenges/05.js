// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

const arr = [1, 2, 3, 4, 5, 6]

const x = arr[0]

const removefirst = ([x, ...arr]) => arr

const y = removefirst(arr)

//--------------------------------------------

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3


function soma(...num){
    return num.reduce((value, total) => value + total)
} 

//--------------------------------------------

// A partir do objeto e utilizando o operador spread:
const usuario = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usuario2 = {...usuario, nome:"Gabriel"}
const usuario3 = {...usuario, endereco:{cidade:"Lontras"}}
console.log(usuario3)