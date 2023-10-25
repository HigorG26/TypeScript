"use strict";
// exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertKey, descriptor) {
        //esses são o 3 operadores básicos de um decorator
        console.log("Executando decorator:");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClasss {
    testing() {
        console.log("Terminando execução do método.");
    }
}
__decorate([
    myDecorator()
], myClasss.prototype, "testing", null);
const obj = new myClasss();
obj.testing();
// multiplos decorators
function aa() {
    return function (target, propertKey, descriptor) {
        console.log("Executou a");
    };
}
function bb() {
    return function (target, propertKey, descriptor) {
        console.log("Executou b");
    };
}
class MultiDecorators {
    testing() {
        console.log("Terminou a execução");
    }
}
__decorate([
    aa(),
    bb()
], MultiDecorators.prototype, "testing", null);
// classe de decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name == "User") {
        console.log("Criando Usuário...");
    }
}
let Userr = class Userr {
    constructor(name) {
        this.name = name;
    }
};
Userr = __decorate([
    classDec
], Userr);
const higuerass = new Userr("Higor");
console.log(higuerass);
// metodo de decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const maquina = new Machine("Carro");
console.log(maquina.showName());
// accessor decorator
class Monster {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    get getName() {
        return `Nome: ${this.name}`;
    }
    get getHeight() {
        return `Altura: ${this.height}`;
    }
}
__decorate([
    enumerable(false)
], Monster.prototype, "getName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "getHeight", null);
const venom = new Monster("Venom", 110);
console.log(venom);
// property decorator
function formatNumber() {
    return (target, propertyKey) => {
        let value;
        const getLet = () => {
            return value;
        };
        const setLet = (newValue) => {
            value = newValue.padStart(3, "0");
        };
        Object.defineProperty(target, propertyKey, {
            get: getLet,
            set: setLet,
        });
    };
}
class IID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], IID.prototype, "id", void 0);
const newItem = new IID("1");
console.log(newItem);
// exemplo real com CLASS decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
const newBook = new Book(1);
console.log(newBook.createdAt);
// exemplo real com METODO decorator
function checkUsersPost() {
    return function (target, key, descriptor) {
        const childFunc = descriptor.value;
        console.log(childFunc);
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkUsersPost()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("My first post here.", newPost.alreadyPosted);
