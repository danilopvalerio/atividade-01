function verificarNumero(num) {
  if (num > 0) {
    console.log("O número é maior que zero.");
  } else if (num < 0) {
    console.log("O número é menor que zero.");
  } else {
    console.log("O número é zero.");
  }
}

verificarNumero(5);
verificarNumero(-3);
verificarNumero(0);
