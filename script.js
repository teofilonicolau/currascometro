/*Carne - 400 g por Pessoa + de 6 horas-650 g
Cerveja - 1200 ml por  Pessoa + 6 horas - 2000 ml
Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml
crianças valem por 0,5*/ 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

   
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000 } kg de Carne</P>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</P>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pets  de 2 litros </P>`
      
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;    
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;    
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;    
    } else {
        return 1000;
    }
}       