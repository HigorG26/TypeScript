"use strict";
// importando arquivos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//USADO {NODE __NOME-DO-ARQUIVO__}
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
//importando variavel
const variable_1 = require("./variable");
console.log(variable_1.x);
// multiplos imports
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
multiple_1.c;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const higorr = new User('Higor', 20);
console.log(higorr.name, '\n' + higorr.age);
