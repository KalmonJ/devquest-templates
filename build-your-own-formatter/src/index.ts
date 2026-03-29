import * as fs from 'fs';

const fileName = process.argv[2];

if (!fileName) {
  console.error("Uso: node /caminho/do/formatador <arquivo.ts>");
  process.exit(1);
}

const fileContent = fs.readFileSync(fileName, 'utf8');

// O objetivo deste desafio é construir um Formatador de Código (Code Formatter).
// Estágio 1: O Scanner / Lexer
// Neste estágio, você dividirá o código do arquivo em Tokens formatáveis.

console.log("Tokens ainda não implementados. Conteúdo recebido:");
console.log(fileContent);

// TODO: Leia fileContent, parseie os tokens e prepare a AST de formatação.
// No Estágio 1 a plataforma experará a saída correta para seu interpretador num EOF.
