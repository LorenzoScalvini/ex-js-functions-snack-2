// Funzione che stampa un messaggio a intervalli regolari e si ferma dopo un certo tempo
const eseguiEferma = (messaggio, tempoAvvio, tempoStop) => {
  const intervallo = setInterval(() => {
    console.log(messaggio);
  }, tempoAvvio);

  setTimeout(() => {
    clearInterval(intervallo);
    console.log('Timer fermato.');
  }, tempoStop);
};

eseguiEferma('Messaggio ripetuto', 1000, 5000);
