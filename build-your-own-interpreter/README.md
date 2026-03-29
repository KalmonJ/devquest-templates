# Build your own Interpreter (DevQuest)

Neste desafio você vai construir o seu próprio Interpretador usando a linguagem inventada pelo famoso livro *Crafting Interpreters* (A linguagem Lox). Você não precisa saber muito sobre compiladores ou AST agora, tudo será ensinado!

## Estágio 1: O Lexer / Scanner
No estágio 1, sua tarefa é conseguir abrir um arquivo `.lox` com as extensões passadas na inicialização, e transformar o arquivo de texto bruto em uma matriz/array de Tokens.
Por exemplo, quando você vê o texto `()` na string, deve gerar `LEFT_PAREN` seguido de `RIGHT_PAREN`.

### Como rodar
```bash
npm install
npm run start test.lox
```

### Submissão
Quando achar que o código funciona:
```bash
devquest submit
```
