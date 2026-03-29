import * as fs from 'fs';

// Exemplo bem rudimentar de extrair uma config:
const userPrompt = process.argv[2] ?? "Qual é a capital do Brasil?";

console.log("Iniciando o seu AI Framework...");
console.log("Prompt Recebido pelo usuário:", userPrompt);

// Objetivo Ponto de Partida: Comunicando-se com a OpenAI (Estágio 1)
// Crie aqui a função base callOpenAI(apiUrl, key, prompt) usando fetch() API via POST e obtenha resultado simples.

async function callOpenAI(prompt: string) {
  // TODO: Implement OpenAI plain HTTP JSON request using raw fetch API
  // Não se esqueça de usar: "model": "gpt-4o"  e "messages" no corpo da requisição.
  console.log("-> 'callOpenAI' não finalizado por você.");
  return null;
}

callOpenAI(userPrompt)
   .then(response => { /* manipular string ou response.choices... */ })
   .catch(err => { console.error("Error chamando Engine API: " + err.message); });
