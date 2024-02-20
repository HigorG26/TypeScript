"use strict";
//============================================================================
// 1 - TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name}, seu preço é: R$${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto está disponível!`);
    }
}
const tshirt = {
    name: "Camisa",
    price: 199.99,
    isAvailable: true,
};
showProductDetails(tshirt);
function ShowUserDetails(userr) {
    console.log(`O usuário tem o e-mail: ${userr.email}`);
    if (userr.role) {
        console.log(`Função: ${userr.role}`);
    }
}
const u1 = { email: "higor.gabrielfds@gmail", role: "CHEFE" };
const u2 = { email: "higor.gabrielfds@gmail.com" };
ShowUserDetails(u1);
ShowUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
//console.log(fusca.wheels = 5)
console.log(fusca);
let coords = {
    x: 10,
};
console.log((coords.wtf = 10));
const higuinhoo = {
    name: "Super Higuinho",
    age: 20,
};
const higuerassss = {
    name: "Higo",
    age: 21,
    superpower: ["Raio laser", "Velocidade", "Super pica"],
};
console.log(higuerassss);
const Arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(Arnold);
//============================================================================
// 7 - READONLY ARRAY
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
let myArray = ["Maçã", "Banana", "Laranja"];
console.log(myArray);
myArray.forEach((item) => {
    console.log(item);
});
myArray.map((item) => {
    return `Fruta: ${item}`;
});
const myNumberArr = [1, 2, 3, 4, 5];
// const anotherAtt: fiveNumbers = [1, 2, 3, 4, 5, 6] <---- errado
console.log(myNumberArr);
const anotherUser = ["Higuinho", 2];
console.log(anotherUser);
anotherUser[0] = "Higão";
console.log(anotherUser);
//============================================================================
// 8 - TUPLES READONLY
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
function showNUmbers(numbers) {
    //numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNUmbers([1, 4]);
