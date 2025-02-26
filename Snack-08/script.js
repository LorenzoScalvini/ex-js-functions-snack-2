function contoAllaRovescia(n) {
  function updateCountdown() {
    if (n >= 0) {
      console.log(n);
      n--;
      setTimeout(updateCountdown, 1000);
    } else {
      console.log('Tempo scaduto!');
    }
  }

  updateCountdown();
}

contoAllaRovescia(5);
