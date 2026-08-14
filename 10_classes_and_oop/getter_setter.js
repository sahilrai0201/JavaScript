class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}sahil`
    }

    set password(value){
        this._password = value
    }
}

const sahil = new User("sahil@work.ai", "abc@123")
console.log(sahil.password)
console.log(sahil.email)