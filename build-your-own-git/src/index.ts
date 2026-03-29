#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

const command = process.argv[2];

switch (command) {
  case 'init':
    // Estágio 1: Inicializando o diretório .git e suas subpastas
    // O git init original cria o diretório .git, .git/objects e .git/refs.
    const gitDir = path.join(process.cwd(), '.git');
    
    // TODO: Escreva a lógica para criar a infraestrutura base do Git.
    // Dica: Use fs.mkdirSync(dir, { recursive: true })
    
    console.log("Initialized empty Git repository");
    break;

  case 'cat-file':
    // Estágio futuro: Ler um objeto blob usando compressão zlib
    console.log("cat-file command not implemented yet");
    break;

  case 'hash-object':
    // Estágio futuro: Escrever um arquivo, gerando um SHA-1 e salvando como objeto
    console.log("hash-object command not implemented yet");
    break;

  default:
    console.error(`Unknown command ${command}`);
    process.exit(1);
}
