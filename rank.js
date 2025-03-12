let vitoria = 1000;
let derrota = 10;
const saldoVitoria = vitoria - derrota;
const nivel = calcNivel(vitoria,derrota);

function calcNivel(vitorias, derrotas){
  const saldoVitoria= vitorias - derrotas;
  if (saldoVitoria<10){
    return "Ferro";
  }
  else if (saldoVitoria >=11 && saldoVitoria <= 20) {
    return "Bronze";
  }
  else if (saldoVitoria >=21 && saldoVitoria <= 50) {
    return "Prata";
  }
  else if (saldoVitoria >=81 && saldoVitoria <= 90) {
    return "Diamante";
  }
  else if (saldoVitoria >=90 && saldoVitoria <= 100) {
    return "Lendário";
  }
  else if (saldoVitoria >=101) {
    return "Imortal";
  }
}

console.log("O herói tem saldo de "+ saldoVitoria +" está no nível de "+ nivel);