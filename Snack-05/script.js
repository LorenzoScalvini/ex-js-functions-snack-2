// Funzione che stampa un messaggio ogni secondo
const stampaOgniSecondo = (messaggio) => {
  setInterval(() => {
    console.log(messaggio);
  }, 1000);
};

stampaOgniSecondo('Ciao, questo messaggio appare ogni secondo!');
