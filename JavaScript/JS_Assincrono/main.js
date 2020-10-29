// let minhaPromisse = function(){
//     return new Promise(function(resolve, reject){
//         let xhr = XMLHttpRequest()

//         xhr.open('GET', 'https://api.github.com/users/leosilva-dev')
//         xhr.send(null)

//         xhr.onreadystatechange = function(){
//         if(xhr.readtstate === 4){
//             if(xhr.status === 200){
//                 resolve(JSON.parse(chr.responseText))
//             }else{
//                 reject("Erro na requisição")
//             }
        
//     }
// }
//     })
// }

// minhaPromisse()
//     .then(function(response){
//         console.log(response)
//     })
//     .catch(function(error){
//         console.warn(error)
//     })

axios.get('https://api.github.com/users/leosilva-dev')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })

