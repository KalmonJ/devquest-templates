import * as fs from 'fs';

const fileName = process.argv[2];

if (!fileName) {
  console.error("Uso: node /caminho/do/interpretador <arquivo.lox>");
  process.exit(1);
}

const fileContent = fs.readFileSync(fileName, 'utf8');

// O objetivo deste interpretador é ler código na linguagem Lox (Bob Nystrom).
// Estágio 1: O Scanner (Tokens)
// Neste estágio, você criará um Lexer para separar os caracteres com o significado correto.

console.log("Tokens ainda não implementados. Conteúdo recebido:");
console.log(fileContent);

// TODO: Leia fileContent, itere através dos caracteres e agrupe em Tokens.
// No Estágio 1 a plataforma esperará receber a lista de Tokens em EOF.
