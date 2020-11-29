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
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

const idadesx2 = usuarios

idadesx2.map(item => item.idade = item.idade*2)

const cinquentao = idadesx2.filter(item => item.idade <= 50)



console.log(cinquentao)



