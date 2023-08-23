"use strict";
function recebeDados(review, notas) {
    if (review == true) {
        if (notas == 1) {
            console.log("Péssimo");
        }
        else if (notas == 2) {
            console.log("Ruim");
        }
        else if (notas == 3) {
            console.log("Razoável");
        }
        else if (notas == 4) {
            console.log("Bom");
        }
        else if (notas == 5) {
            console.log("Ótimo");
        }
        else {
            console.log("Inválido");
        }
    }
    else if (review == false) {
        console.log("O usuário não retornou review.");
    }
}
recebeDados(true, 5);
recebeDados(false);
