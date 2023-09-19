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
