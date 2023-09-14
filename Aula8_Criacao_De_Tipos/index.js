"use strict";
//============================================================================
// 1 - GENERICS
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
function showData(arg) {
    return `O dado é ${typeof arg}`;
}
console.log(showData(3));
console.log(showData("teste"));
console.log(showData([1, 1, 2]));
//============================================================================
// 2 - CONSTRAINT EM GENERIC
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const mObj = { name: "Porta", cor: "branca" };
console.log(showProductName(mObj));
const myCar = { name: "fuska", wheel: 4, engine: 2.0, color: "Branco" };
const myPen = { name: "BIC", wheel: false, engine: false, color: "Blue Pen" };
console.log(myCar);
console.log(myPen);
//============================================================================
// 4 - TYPE PARAMETERS
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
function getSomeKey(obj, key) {
    //   return `A chave ${key} que está presente no objeto e tem o valor de ${obj[key]}`
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
