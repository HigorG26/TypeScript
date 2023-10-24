"use strict";
// exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!");
    return ;
}
class myClass {
    testing() {
        console.log("Terminando execução do método.");
    }
}
