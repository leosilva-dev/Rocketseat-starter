var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

    // Escreva uma função que produza o seguinte resultado:

    // O Diego possui as habilidades: Javascript, ReactJS, Redux
    // O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

    // Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
    // com um separador utilize o join

    function skill(usuarios){
        
        for(let user of usuarios){
            console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join([separator = ", "])}`)
        }
    }

    console.log(skill(usuarios))

    //Object.values(usuarios)[0]