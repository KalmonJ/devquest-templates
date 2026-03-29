import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ '
});

rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  
  // Estágio 1: Comandos embutidos (Builtins) - "exit"
  // Neste primeiro estágio, se o usuário digitar "exit 0", seu shell deve ser finalizado
  // usando o status code correto (0)!
  
  if (input === 'exit 0') {
    // TODO: Finalize o processo mantendo a saída limpa
  } else {
    // Para outros comandos (Ex: echo foo), você deve tratá-los no futuro...
    console.log(`${input}: command not found`);
  }
  
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});
