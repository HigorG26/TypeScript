//============================================================================
// 1 - TYPE GUARD
//============================================================================
function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log("Resultado:", parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    let result: number = a + b;
    console.log("Resultado:", result);
  } else {
    console.log("Não foi possível realizar esta operação!");
  }
}
// sum ("4","6")
// sum(10, 5.4)
// sum("5",3)

//============================================================================
// 2 - CHECANDO SE VALOR EXISTE
//============================================================================
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log("Resultado:", sum);
    } else if (operation === "mult") {
      const mult = arr.reduce((i, total) => i * total);
      console.log("Resultado:", mult);
    }
  } else {
    console.log(arr, "Por favot, defina uma operação!");
  }
}

operations([1, 2, 3, 4, 5]);
operations([1, 2, 3, 4, 5], "sum");
operations([1, 2, 3, 4, 5], "mult");
//============================================================================
// 3 - INSTANCEOF
//============================================================================

class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User("Jhon");
const higor = new User("Higor");

function greetingUser(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Bem vindo, ${user.name}, você é um ADMIN!`);
  } else if (user instanceof User) {
    console.log(`Bem vindo, ${user.name}, você é um usuário normal!`);
  }
}
//============================================================================
// 4 - OPERADOR IN
//============================================================================

class Dog {
  name;
  bread;

  constructor(name: string, bread?: string) {
    this.name = name;
    if (bread) {
      this.bread = bread;
    }
  }
}

const higao = new Dog("Higão");
const higuinho = new Dog("Higuinho", "Higueras");

function showDogDetail(dog: Dog | any) {
  if ("bread" in dog) {
    console.log(`O cachorro ${dog.name} é da raça: ${dog.bread}`);
  } else {
    console.log(`O cachorro ${dog.name} não tem raça`);
  }
}
showDogDetail(higao);
showDogDetail(higuinho);
