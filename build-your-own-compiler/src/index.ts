import * as fs from 'fs';

const fileName = process.argv[2];

if (!fileName) {
  console.error("Uso: node /caminho/do/compilador <arquivo.sq> -o saida.asm");
  process.exit(1);
}

const fileContent = fs.readFileSync(fileName, 'utf8');

// Compiladores estáticos (C, Rust, Go) não interpretam código imediatamente.
// Em vez disso, geram linguagem assembly ou bytecodes.

// TODO: Fase 1 (Parsing Básico). 
// Quando passarmos a flag de compilação, o compilador deve ler um programa 
// simples retornando código de saída `return 0;` e gerar o assembly.

console.log("AST & Assembly Emission not implemented yet.");
