# Build your own Redis (DevQuest)

Bem-vindo ao desafio "Construa seu próprio Redis"!
Neste desafio, você irá construir uma réplica funcional do Redis do zero, lidando com o Redis Serialization Protocol (RESP), requisições concorrentes, persistência de dados em disco e replicação.

## Estágio 1: Respondendo ao PING
Seu primeiro estágio na plataforma é iniciar o servidor TCP e responder ao clássico comando PING. 
Quando conectamos no redis-cli e enviamos um "PING", o servidor deve retornar exatamente "+PONG\r\n".

### Como rodar
```bash
npm install
npm start
```

### Como testar
Você pode testar localmente usando o redis-cli original:
```bash
redis-cli ping
```

### Submissão
Quando achar que o código funciona, no diretório raiz do desafio run:
```bash
devquest submit
```
