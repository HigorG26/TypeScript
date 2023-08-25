//============================================================================
// 1 - VOID
//============================================================================
function semRetorno(): void {
  console.log("Não retorna nada");
}

//============================================================================
// 2 - CALLBACK COMO ARGUMENTO
//============================================================================
function greeting(name: string) {
  return `Olá ${name}`;
}
function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando função...");

  const greet = f(userName);
  console.log(greet);
}
preGreeting(greeting, "Higor");

//============================================================================
// 3 - GENERIC FUNCTION
//============================================================================

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["a", "b", "c", "d", "e"]));

function mergeObject<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}
const newObj = mergeObject({name: "Higor", cpf: 12345678900}, {surName: "Gabriel", age: 20, job:"Programmer"})
console.log(newObj)

//============================================================================
// 4 - CONSTRAINTS
//============================================================================

function biggestNumber<T extends number | string>(a: T, b:T): T {
    let biggest: T

    if(+a > +b) {
        biggest = a
    }else {
        biggest = b
    }
    return biggest
}

console.log(biggestNumber(1, 2));
console.log(biggestNumber("a", "b"));

//============================================================================
// 5 - ESPECIFICADOR DE PARAMETROS
//============================================================================

function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}
console.log(mergeArrays<number | string>([1,2,3],["um", "dois", "três"]))

//============================================================================
// 6 - PARAMETRO OPCIONAIS
//============================================================================

function optionParams(nome: string, surname?:string) {
    return surname? nome +" "+surname : nome
}
console.log(optionParams("Higor"))
console.log(optionParams("Higor", "Gabriel"))