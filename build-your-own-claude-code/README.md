# Build your own AI Agent CLI (Clone Claude Code)

Os assistentes de código AI e agentes CLI mudaram a evolução dos devs. Em vez de criar comandos manuais, este desafio te guiaria a criar um cliente conversacional igualzinho ao Anthropic "Claude Code", misturando chamadas para LLM (APIs da OpenAI/Anthropic), chamando ferramentas de OS nativas (Run Command) no background via Function Calling autônomo.

## Estágio 1: Prompt e Comandos "/help"
Primeiro, o sistema não começa já usando IA. Nós temos que lidar e mapear o console. Seu CLI deve abrir com `🤖 > ` e suportar o pre-slash comando `/help` para introduzir o usuário e lidar com `exit`.

### Como rodar
```bash
npm install
npm start
```
Digite `/help` e depois `Qualquer coisa` para ver o eco da stub da IA!

### Submissão
Quando achar que o código funciona e o validador tiver garantido:
```bash
devquest submit
```
