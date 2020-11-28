const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//map
const idades = usuarios.map(item => item.idade)
// console.log(idades)

//----------------------------------

//filter
const Adultos = usuarios.filter(item => item.idade > 18 & item.empresa == "Rocketseat")
// console.log(Adultos)

//----------------------------------

//find
const googler = usuarios.find(item => item.empresa == "Google")
// console.log(googler)

//----------------------------------

//Unindo operações
const idadesx2 = usuarios.map(item => item.idade*2)
// idadesx2.find(item => item.idade <= 50)
console.log(idadesx2)
