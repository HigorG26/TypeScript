// importando arquivos

//USADO {NODE __NOME-DO-ARQUIVO__}
import importGreet from "./greet";
importGreet();

//importando variavel
import { x } from "./variable";
console.log(x)


// multiplos imports
import { a, b, c } from './multiple' 
console.log(a)
console.log(b)
c

// importando tipos
import { Human } from "./myType";

class User implements Human {
    name
    age

    constructor (name:string, age:number) {
        this.name = name
        this.age = age
    }
}

const higorr = new User('Higor', 20)
console.log(higorr.name,'\n'+higorr.age)


