// 1 - arrays
let numbers: number[] = [1, 2, 3, 4, 5];

let teste = numbers.push(2); // adicionar um indice no final
console.log(teste);
console.log(numbers[3]);

const nomes: string[] = ["Higor", "Heloisa", "Hian"];
console.log(nomes);

// 2 - outra intaxe de array
const nums: Array<number> = [10, 20, 30, 40, 50];
console.log(nums);

// 3 - any ??????
const anny: any = [1, "teste", true, [], { nome: "Higor" }]; //EVITAR
console.log(anny);

// 4 - prametros tipados

function soma(a:number, b:string){
    console.log("Soma:",a+b)
}
soma(6, "7")

// 5 - retorno de função 
function hello(name: string):string{ //o segundo ":string" bloqueia outro tipo de retorno além do tipo STRING
    return `Olá ${name}`
}
console.log(hello("Higor"))