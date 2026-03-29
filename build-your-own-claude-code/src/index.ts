import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // O prompt icônico do claude code:
  prompt: '🤖 > '
});

rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  
  // Estágio 1: Tratar comandos básicos (como /help e conversas de eco)
  // Como o Claude Code e Devin não são apenas shells, e sim agentes de IA,
  // Nós primeiramente temos que rotear chamadas de sistema versus IA.

  if(input === "/help") {
    console.log("Comandos válidos: /help, /exit. O resto é enviado à API LLM.");
  } else if (input === "exit" || input === "/exit") {
    process.exit(0);
  } else {
    // LLM Stub (Na fase 2 adicionaremos uma key da Anthropic ou OpenAI)
    console.log(`[Stub] AI respondeu que estava processando a tarefa: "${input}"`);
  }
  
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});
