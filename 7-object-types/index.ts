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

interface Userr {
  email: string;
  role?: string;
}

function ShowUserDetails(userr: Userr) {
  console.log(`O usuário tem o e-mail: ${userr.email}`);
  if (userr.role) {
    console.log(`Função: ${userr.role}`);
  }
}

const u1: Userr = { email: "higor.gabrielfds@gmail", role: "CHEFE" };
const u2: Userr = { email: "higor.gabrielfds@gmail.com" };
ShowUserDetails(u1);
ShowUserDetails(u2);

//============================================================================
// 3 - READONLY
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};
//console.log(fusca.wheels = 5)
console.log(fusca);

//============================================================================
// 4 - INDEX SIGNATURE
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};
console.log((coords.wtf = 10));

//============================================================================
// 5 - EXTENDING TYPES
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpower: string[];
}

const higuinhoo: Human = {
  name: "Super Higuinho",
  age: 20,
};

const higuerassss: SuperHuman = {
  name: "Higo",
  age: 21,
  superpower: ["Raio laser", "Velocidade", "Super pica"],
};

console.log(higuerassss);

//============================================================================
// 6 - INTERSECTION TYPES
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

interface Gun {
  type: string;
  caliber: number;
}

interface Character {
  name: string;
}

type HumanWGun = Character & Gun;

const Arnold: HumanWGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};
console.log(Arnold);

//============================================================================
// 7 - READONLY ARRAY
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

let myArray: ReadonlyArray<string> = ["Maçã", "Banana", "Laranja"];
console.log(myArray);

myArray.forEach((item) => {
  console.log(item);
});

myArray.map((item) => {
  return `Fruta: ${item}`;
});

//============================================================================
// 8 - TUPLES
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

type fiveNumbers = [number, number, number, number, number];

const myNumberArr: fiveNumbers = [1, 2, 3, 4, 5];
// const anotherAtt: fiveNumbers = [1, 2, 3, 4, 5, 6] <---- errado
console.log(myNumberArr);

type nameNAge = [string, number];
const anotherUser: nameNAge = ["Higuinho", 2];
console.log(anotherUser);
anotherUser[0] = "Higão";
console.log(anotherUser);

//============================================================================
// 8 - TUPLES READONLY
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

function showNUmbers(numbers: readonly [number, number]) {
  //numbers[0] = 10
  console.log(numbers[0]);
  console.log(numbers[1]);
}



showNUmbers([1, 4]);
