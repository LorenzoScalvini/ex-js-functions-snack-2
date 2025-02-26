function sequenzaOperazioni(operazioni, intervallo) {
  let indice = 0;

  function eseguiProssima() {
    if (indice < operazioni.length) {
      operazioni[indice]();
      indice++;
      setTimeout(eseguiProssima, intervallo);
    }
  }

  eseguiProssima();
}

sequenzaOperazioni(
  [
    () => console.log('Operazione 1'),
    () => console.log('Operazione 2'),
    () => console.log('Operazione 3'),
  ],
  2000
);
