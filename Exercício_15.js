// Este programa gera os 10 primeiros números da sequência de Fibonacci

// Inicializamos os dois primeiros números da sequência
let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

// Usamos um loop for para mostrar os 10 primeiros números
for (let i = 1; i <= 10; i++) {
  console.log(a); // Mostra o número atual

  // Calcula o próximo número da sequência
  let proximo = a + b;

  // Atualiza os valores de a e b
  a = b;
  b = proximo;
}
