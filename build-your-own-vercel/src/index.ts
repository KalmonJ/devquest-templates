const args = process.argv.slice(2);
const command = args[0];

if (!command) {
  console.log('Usage: myvercel <deploy|dev|build|logs>');
  process.exit(0);
}

switch (command) {
  case 'deploy':
    // O objetivo deste desafio é construir sua ferramenta de Host em Serverless
    console.log("Comando CLI reconhecido, porém não há backend implementado no deploy.");
    
    // TODO: Construir o pipeline de Detectar o Framework de App, Build, Zip e Push.
    break;
  default:
    console.log(`Comando desconhecido: ${command}`);
}
