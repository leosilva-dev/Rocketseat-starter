var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

// Retorno:
// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293.

function formataEndereco(endereco){
    return "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " com nº " + endereco.numero 
}

console.log(formataEndereco(endereco))

