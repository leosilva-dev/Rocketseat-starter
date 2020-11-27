class List{
    constructor(){
        this.data =  []
    }

    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super();
        this.user = "Leo"
    }

    showUser(){
        console.log(this.user)
    }

    
}

var MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.showUser();

class math{
    static sum(a,b){
        return a+b
    }
}

console.log(
    math.sum(10,20)
    )

//-------------------------------------------------------------

//Manipulando arrays
const arr = [1,2,5,8,9]

//map
const newArr = arr.map(function(item, index){
    return item*2
})
// console.log(newArr)


//reduce
const sum = arr.reduce(function(total, next){
    return total + next
})
// console.log(sum)


//filter
const filter = arr.filter(function(item){
    return item % 2 === 0
})
// console.log(filter)


//find
const find = arr.find(function(item){
    return item  === 2
})
// console.log(find)

//-------------------------------------------------------------

//Arrow functions

const array = [1,2,5,8,9]

const newArray = array.map(item => item * 2)