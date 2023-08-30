//============================================================================
// 1 - TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

interface Product {
  name: string;
  price: number;
  isAvailable: true;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name}, seu preço é: R$${product.price}`
  );
  if (product.isAvailable) {
    console.log(`O produto está disponível!`);
  }
}

const tshirt: Product = {
  name: "Camisa",
  price: 199.99,
  isAvailable: true,
};
showProductDetails(tshirt);
//showProductDetails({name:"Tênis", price: 399.67, isAvailable:false})

//============================================================================
// 2 - PROPRIEDADE OPCIONAL EM INTERFACE
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

interface User {
  email: string;
  role?: string;
}

function ShowUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  user.role
    ? `O usuaário tem a função: ${user.role}`
    : `O usuário NÃO possú função!`;
}

const u1: User = { email: "higor.gabrielfds@gmail.com", role: "CHEFE" };
const u2: User = { email: "higor.gabrielfds@gmail.com" };
ShowUserDetails(u1);
