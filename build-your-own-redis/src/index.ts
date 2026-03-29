import * as net from 'net';

// Você pode usar o console.log para debugar o que quiser, 
// ele será impresso localmente, mas a plataforma valida a saída de rede.
console.log("Iniciando o servidor na porta 6379...");

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    // O protocolo Redis (RESP) é baseado em texto/binário.
    // Exemplo de payload PING recebido: "*1\r\n$4\r\nPING\r\n"
    
    // TODO: Extraia a lógica e escreva a resposta correta para a conexão TCP
    // O comando "PING" espera uma reposta "+PONG\r\n"

    socket.write("+PONG\r\n"); // Implementação muito trivial para passar no estágio 1
  });

  socket.on('error', (err) => {
     console.error("Erro na conexão:", err);
  });
});

server.listen(6379, '127.0.0.1');
