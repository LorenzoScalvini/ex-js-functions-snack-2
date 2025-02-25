// Funzione che crea un contatore automatico
const creaContatoreAutomatico = (intervallo) => {
  let contatore = 0;
  return () => {
    setInterval(() => {
      contatore++;
      console.log('Contatore:', contatore);
    }, intervallo);
  };
};

const avviaContatore = creaContatoreAutomatico(1000);
avviaContatore();
