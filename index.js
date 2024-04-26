function calcularNivel(vitorias, derrotas){
    return vitorias - derrotas;
}

function pegarRanque(vitorias){
    if(vitorias < 11){
        return "Ferro";
    }

    if(vitorias > 10 && vitorias < 21){
        return "Bronze";
    }

    if(vitorias > 20 && vitorias < 51){
        return "Prata";
    }

    if(vitorias > 50 && vitorias < 81){
        return "Ouro";
    }

    if(vitorias > 80 && vitorias < 91){
        return "Diamante";
    }

    if(vitorias > 90 && vitorias < 101){
        return "Lendário";
    }

    return "Imortal";
}

//Altere essas variaveis
const vitorias = 95;
const derrotas = 5;

let saldo = calcularNivel(vitorias, derrotas);
let nivel = pegarRanque(vitorias);

console.log(`O heroi tem saldo de ${saldo} está no nível de ${nivel}`);