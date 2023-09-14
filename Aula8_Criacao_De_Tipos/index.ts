//============================================================================
// 1 - GENERICS
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

function showData<T>(arg:T): string {
    return `O dado é ${typeof arg}`
}

console.log(showData(3))
console.log(showData("teste"))
console.log(showData([1,1,2]))

//============================================================================
// 2 - CONSTRAINT EM GENERIC
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

function showProductName<T extends {name: string}> (obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const mObj = {name: "Porta", cor: "branca"}
console.log(showProductName(mObj))

//============================================================================
// 3 - INTERFACES COM GENERIC
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

interface MyObj<T, U, Q> {
    name: string
    wheel: T
    engine: U
    color: Q
}

type Kar = MyObj<number, number, string>
type Pen = MyObj<boolean, boolean, string>

const myCar:Kar = {name: "fuska", wheel: 4, engine: 2.0, color: "Branco"}
const myPen:Pen = {name: "BIC", wheel: false, engine:false, color: "Blue Pen"}

console.log(myCar)
console.log(myPen)


//============================================================================
// 4 - TYPE PARAMETERS
// 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
 //   return `A chave ${key} que está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))