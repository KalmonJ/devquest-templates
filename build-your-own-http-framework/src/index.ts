import * as net from 'net';

const PORT = 3000;

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const request = data.toString();
    console.log("Nova request recebida:");
    console.log(request);
    
    // O objetivo deste desafio é construir o seu próprio Express/Hono do zero.
    // Estágio 1: Servidor TCP Bruto e Resposta HTTP OK
    // Neste estágio, responda "Hello, World!" acompanhado do header 200 OK
    
    // TODO: Escreva a string HTTP válida e encerre a conexão do socket
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
