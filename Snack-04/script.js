// Funzione che crea un timer
const creaTimer = (tempo) => {
  return () => {
    setTimeout(() => {
      console.log('Tempo scaduto!');
    }, tempo);
  };
};

// Esempio di utilizzo
const timerDi3Secondi = creaTimer(3000);
timerDi3Secondi();
