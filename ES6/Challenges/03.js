//Converta as funções nos seguintes trechos de código em Arrow Functions:

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
    return item + 10;
   });

const arr2 = arr.map(item => item + 10);

// console.log(arr2)

//-----------------------------------------

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {
    //  return usuario.idade;
    // }
    
    // mostraIdade(usuario);
    
    
const showAge = () => usuario.idade
    
    
//-----------------------------------------

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);


const showUser = (nome = 'Diego', idade = 18) => {
    return {nome, idade}
} 

//-----------------------------------------

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

const promise2 = () => new Promise ((resolve, reject)=> resolve()) 