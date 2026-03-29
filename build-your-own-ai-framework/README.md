# Build your own AI Framework (DevQuest)

Neste desafio você vai construir o seu próprio framework para Inteligência Artificial (semelhante ao Vercel AI SDK ou Mastra AI). Você criará adaptadores padronizados (OpenAI, Anthropic), funções core de abstração (`generateText`, `streamText`) com manipulação paralela de Server-Sent Events e suporte a Ferramentas Autônomas e Multi-Passos (Agents).

## Estágio 1: Comunicando-se diretamente com LLMs
No estágio inicial, construa o `callOpenAI` usando apenas o `fetch` nativo para se comunicar com APIs HTTP da OpenAI sem bibliotecas terceirizadas ou dependências complexas (zero NPM packages de IA).

### Como rodar
```bash
npm install
export OPENAI_API_KEY=sk-...
npm run start
```

### Submissão
Quando concluir e achar que funciona localmente de acordo com a premissa da tarefa listada pela GUI:
```bash
devquest submit
```
