//============================================================================
// 1 - arrays
//============================================================================
let numbers: number[] = [1, 2, 3, 4, 5];

let teste = numbers.push(2); // adicionar um indice no final
console.log(teste);
console.log(numbers[3]);

const nomes: string[] = ["Higor", "Heloisa", "Hian"];
console.log(nomes);
//============================================================================
// 2 - outra intaxe de array
//============================================================================
const nums: Array<number> = [10, 20, 30, 40, 50];
console.log(nums);
//============================================================================
// 3 - any ??????
//============================================================================
const anny: any = [1, "teste", true, [], { nome: "Higor" }]; //EVITAR
console.log(anny);
//============================================================================
// 4 - prametros tipados
//============================================================================
function soma(a: number, b: string) {
  console.log("Soma:", a + b);
}
soma(6, "7");
//============================================================================
// 5 - retorno de função
//============================================================================
function hello(name: string): string {
  //o segundo ":string" bloqueia outro tipo de retorno além do tipo STRING
  return `Olá ${name}`;
}
console.log(hello("Higor"));
//============================================================================
// 6 - FUNÇÃO ANONIMA
//============================================================================
setTimeout(function () {
  const sallary: number = 10000;
  //console.log(parseFloat(sallary))
}, 2000);
//============================================================================
// 7 - TIPOS DE OBJETO
//============================================================================
function passCoordinates(coord: { x: number; y: number }) {
  console.log("Coordenadas");
  console.log("X:", coord.x);
  console.log("Y:", coord.y);
}
const objCoord = { x: 15550, y: 8546541 };
passCoordinates(objCoord);
//============================================================================
// 8 - tópicos condicionais
//============================================================================
function showNumbers(a: number, b?: number, c?: number) {
  a ? console.log(a) : console.log("Não tem nada no A");
  b ? console.log(b) : console.log("Não tem nada no B");
  c ? console.log(c) : console.log("Não tem nada no C");
}

showNumbers(1, 2, 3);
showNumbers(6);

//============================================================================
// 9 - VALIDAÇÃO DE ARGUMENTO OPCIONAL
//============================================================================
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá , ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Higor", "Gabriel"));
console.log(advancedGreeting("Higor"));

//============================================================================
// 10/11 - AVANÇADO/UNION TYPE
//============================================================================
function showBalance(balance: number | string) {
  if (typeof balance == "number") {
    return console.log(`O saldo da conta é de: R$${balance}`);
  }
  return console.log(`O saldo da conta é de: ${balance} de reais`);
}
showBalance(100000);
showBalance("Um milhão");

//============================================================================
// 12 - TYPE ALIAS
//============================================================================

type ID = string | number // <----- TYPE ALIAS
function showId(id: ID){
    if (typeof id == "number"){
        return console.log(`ID: ${id} (Number)`)
    }
    return console.log(`ID: ${id} (String)`)
}

showId(2)
showId("2")

//============================================================================
// 13 - INTERFACES
//============================================================================

interface Point{
    x: number
    y: number
    z: number
    local: string
}

function showCoord(obj: Point){
    console.log(`X: ${obj.x}\nY: ${obj.y}\nZ: ${obj.z}\nLocal: ${obj.local}`)
}

const coordObj: Point = {
    x: -14545,
    y: 516552,
    z: -558456,
    local: "Rua Nolina"
}

showCoord(coordObj)

//============================================================================
// 13 - INTERFACES x TYPE ALIAS
//============================================================================
interface Person{
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Higor", age: 20}
console.log(somePerson)

type personType = {
    name: string
}
