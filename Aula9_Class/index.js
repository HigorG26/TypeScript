"use strict";
class blogSpot {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do pst é: ${this.title}`;
    }
}
// public method
class A {
    constructor() {
        this.x = 10;
    }
}
class B {
    constructor() {
        this.x = 15;
    }
}
const Aa = new A();
const Bb = new B();
console.log(Aa);
// statis member
class StaticsMembers {
    constructor() {
        this.prop = "teste estatitco";
    }
}
//parameter properties
class ParameterProps {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get getQty() {
        return this.qty;
    }
    get getPrice() {
        return this.price;
    }
}
const newWear = new ParameterProps("Camisa", 4, 30);
console.log(newWear.name);
console.log(newWear.getPrice);
console.log(newWear.getQty);
//class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Higor Gabriel');
console.log(pessoa.name);
