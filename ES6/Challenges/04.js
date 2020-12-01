// A partir do seguinte objeto:
const empresa = {
 nome: 'Rocketseat',
 endereco: {
 cidade: 'Rio do Sul',
 estado: 'SC',
 }
};

const nome = empresa.nome
const cidade = empresa.endereco.cidade
const estado = empresa.endereco.estado

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
// console.log(nome)    // Rocketseat
// console.log(cidade) // Rio do Sul
// console.log(estado) // SC

//-------------------------------------

function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
   }
//    mostraInfo({ nome: 'Diego', idade: 23 })

//    Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
//    separadamente e a função poder retornar apenas:

   function showInfo(nome = 'leo', idade = 23){
       return `${nome} tem ${idade} anos.`;

   }

   //-------------------------------------