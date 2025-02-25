// Funzione dichiarativa
function somma(a, b) {
  return a + b;
}
console.log('Funzione dichiarativa:', somma(3, 5));

// Funzione anonima assegnata a una variabile
const sommaAnonima = function (a, b) {
  return a + b;
};
console.log('Funzione anonima:', sommaAnonima(3, 5));

// Arrow function
const sommaArrow = (a, b) => a + b;
console.log('Arrow function:', sommaArrow(3, 5));
