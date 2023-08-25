//============================================================================
// 1 - VOID
//============================================================================
function semRetorno():void {
    console.log("Não retorna nada")
}

//============================================================================
// 2 - CALLBACK COMO ARGUMENTO
//============================================================================
function greeting(name:string){
    return `Olá ${name}`
}
function preGreeting(f: (name:string) => string, userName:string) {
    console.log("Preparando função...")

    const greet = f(userName)
    console.log(greet)
}
preGreeting(greeting, "Higor")