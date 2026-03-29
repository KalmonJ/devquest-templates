# Build your own Git (DevQuest)

Bem-vindo ao desafio "Construa seu próprio Git"!
Neste desafio, você irá recriar os mecanismos internos e os principais comandos do sistema de controle de versão mais usado do mundo. Aprenda como a árvore de objetos (Blobs, Trees e Commits), a compressão e os arquivos de index funcionam por baixo dos panos!

## Estágio 1: Inicializando um Repositório (git init)
Seu primeiro estágio na plataforma é interceptar o comando `init` e criar os diretórios base como ele deve fazer.
O git real cria um diretório `.git` contendo `.git/objects` e `.git/refs` e um arquivo inicial `HEAD`.

### Como testar localmente
```bash
npm install
npm run start init
```

### Submissão
Quando achar que o código funciona:
```bash
devquest submit
```
