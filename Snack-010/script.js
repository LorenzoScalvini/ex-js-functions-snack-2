function creaThrottler(fn, limite) {
  let ultimaEsecuzione = 0;

  return function (...args) {
    const ora = Date.now();

    if (ora - ultimaEsecuzione >= limite) {
      ultimaEsecuzione = ora;
      fn(...args);
    } else {
      console.log(`❌ Ignorato! Troppo presto (${ora - ultimaEsecuzione}ms)`);
    }
  };
}

const logMessage = () => console.log('✅ Eseguito!');
const throttledLog = creaThrottler(logMessage, 2000);

console.log('Test in corso...');
throttledLog();
throttledLog();

setTimeout(throttledLog, 1000);
setTimeout(throttledLog, 2500);
setTimeout(throttledLog, 3000);
setTimeout(throttledLog, 5000);
