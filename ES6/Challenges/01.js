class usuario{
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }

    isAdmin(){
        return this.admin === true
    }
}

class admin extends usuario{
    constructor(email, senha){
        super(email, senha)
        this.admin = true
    }
}


const user1 = new usuario("leo@gmail.com",123)
const adm1 = new admin("leo@gmail.com",123)

console.log(user1.isAdmin())
console.log(adm1.isAdmin())