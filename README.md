# Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for

# Exercício 15: Sequência de Fibonacci

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este programa em JavaScript imprime os **10 primeiros números** da sequência de Fibonacci utilizando um loop `for`.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercício_15.js` e execute com:

```
node exercício_15.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.

