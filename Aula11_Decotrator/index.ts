// exemplo decorator

function myDecorator() {
    console.log("Iniciando decorator!")
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor)
}

class myClass {
    testing() {
        console.log("Terminando execução do método.")
    }
}