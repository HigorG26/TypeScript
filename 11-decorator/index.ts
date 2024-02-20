// // exemplo decorator

// function myDecorator() {
//   console.log("Iniciando decorator!");
//   return function (
//     target: any,
//     propertKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     //esses são o 3 operadores básicos de um decorator
//     console.log("Executando decorator:");
//     console.log(target);
//     console.log(propertKey);
//     console.log(descriptor);
//   };
// }

// class myClasss {
//   @myDecorator()
//   testing() {
//     console.log("Terminando execução do método.");
//   }
// }

// const obj = new myClasss();
// obj.testing();

// // multiplos decorators

// function aa() {
//   return function (
//     target: any,
//     propertKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("Executou a");
//   };
// }
// function bb() {
//   return function (
//     target: any,
//     propertKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("Executou b");
//   };
// }

// class MultiDecorators {
//   @aa()
//   @bb()
//   testing() {
//     console.log("Terminou a execução");
//   }
// }

// // classe de decorator

// function classDec(constructor: Function) {
//   console.log(constructor);
//   if (constructor.name == "User") {
//     console.log("Criando Usuário...");
//   }
// }

// @classDec
// class Userr {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const higuerass = new Userr("Higor");
// console.log(higuerass);

// // metodo de decorator
// function enumerable(value: boolean) {
//   return function (
//     target: any,
//     propertKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.enumerable = value;
//   };
// }

// class Machine {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }

//   @enumerable(false)
//   showName() {
//     console.log(this);
//     return `O nome da máquina é: ${this.name}`;
//   }
// }

// const maquina = new Machine("Carro");
// console.log(maquina.showName());

// // accessor decorator

// class Monster {
//   name?;
//   height?;

//   constructor(name: string, height: number) {
//     this.name = name;
//     this.height = height;
//   }
//   @enumerable(false)
//   get getName() {
//     return `Nome: ${this.name}`;
//   }
//   @enumerable(false)
//   get getHeight() {
//     return `Altura: ${this.height}`;
//   }
// }

// const venom = new Monster("Venom", 110);
// console.log(venom);

// // property decorator

// function formatNumber() {
//   return (target: Object, propertyKey: string) => {
//     let value: string;

//     const getLet = () => {
//       return value;
//     };

//     const setLet = (newValue: string) => {
//       value = newValue.padStart(3, "0");
//     };

//     Object.defineProperty(target, propertyKey, {
//       get: getLet,
//       set: setLet,
//     });
//   };
// }

// class IID {
//   @formatNumber()
//   id;

//   constructor(id: string) {
//     this.id = id;
//   }
// }

// const newItem = new IID("1");

// console.log(newItem);

// // exemplo real com CLASS decorator

// function createdDate(created: Function) {
//   created.prototype.createdAt = new Date();
// }

// @createdDate
// class Book {
//   id;
//   createdAt?: Date;

//   constructor(id: number) {
//     this.id = id;
//   }
// }
// const newBook = new Book(1);
// console.log(newBook.createdAt);

// // exemplo real com METODO decorator

// function checkUsersPost() {
//   return function (
//     target: Object,
//     key: string | Symbol,
//     descriptor: PropertyDescriptor
//   ) {
//     const childFunc = descriptor.value;
//     console.log(childFunc);
//     descriptor.value = function (...args: any[]) {
//       if (args[1] == true) {
//         console.log("User já postou");
//         return null;
//       } else {
//         return childFunc.apply(this, args);
//       }
//     };
//   };
// }

// class Post {
//   alreadyPosted: boolean = false;

//   @checkUsersPost()
//   post(content: string, alreadyPosted: boolean) {
//     this.alreadyPosted = true;
//     console.log(`Post do usuário: ${content}`);
//   }
// }

// const newPost = new Post();

// newPost.post("My first post here.", newPost.alreadyPosted);
// newPost.post("My first post here.", newPost.alreadyPosted);

// // exemplo real property decorator

// function Max (limit: number) {
//   return function(
//     target: Object,
//     propertyKey: string
//     ) {
//       let value: string;


//       const getter = function() {
//         return value
//       }
//       const setter = function(newVal: string) {
//         if (newVal.length > limit) {
//           console.log(`O nome deve conter no máximo ${limit} caracteres!`)
//           return null
//         } else {
//           value = newVal
//           console.log(`Admin: ${value}`)
//         }
//       }

//       Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set : setter
//       })

//     }

// }

// class Admin {
//   @Max(5)
//   username;

//   constructor(username: string) {
//     this.username = username
//   }
// }

// let admin = new Admin('higor')
// let admin1 = new Admin('heloisa')