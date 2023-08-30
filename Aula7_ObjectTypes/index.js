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
function ShowUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    user.role
        ? `O usuaário tem a função: ${user.role}`
        : `O usuário NÃO possú função!`;
}
const u1 = { email: "higor.gabrielfds@gmail.com", role: "CHEFE" };
const u2 = { email: "higor.gabrielfds@gmail.com" };
ShowUserDetails(u1);
