// Funzione che esegue un'operazione su due numeri
const eseguiOperazione = (a, b, operazione) => operazione(a, b);

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

console.log(eseguiOperazione(3, 4, somma));
console.log(eseguiOperazione(3, 4, moltiplica));
