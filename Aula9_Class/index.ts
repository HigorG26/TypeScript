interface showTitle{
    itemTitle() : string
}
class blogSpot implements showTitle {
    title

    constructor(title:showTitle) {
        this.title = title
    }
    itemTitle() {
        return `O titulo do pst é: ${this.title}`
    }
}

// public method
 class A {
    public x = 10
 }

 class B {
    public x = 15
 }

 const Aa = new A()
 const Bb = new B()
 console.log(Aa)

// statis member

class StaticsMembers {
    prop = "teste estatitco"
}

//parameter properties
class ParameterProps {
    constructor (public name:String, private qty: Number, private price: Number) {
        this.name = name
        this.qty = qty
        this.price = price
    }
    get getQty() {
        return this.qty
    }
    get getPrice() {
        return this.price
    }
}

const newWear = new ParameterProps("Camisa", 4, 30)
console.log(newWear.name)
console.log(newWear.getPrice)
console.log(newWear.getQty)

//class expressions
const myClass = class<T> {
    name;

    constructor(name:T) {
        this.name = name
    }
}

const pessoa = new myClass('Higor Gabriel')
console.log(pessoa.name)

