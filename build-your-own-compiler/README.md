# Build your own Compiler (DevQuest)

Diferente do Interpretador que avalia lógica na mesma hora (como Python, Ruby ou Node original), o Compilador gera código executável em Assembly nativo focado em X86 ou ARM64 (como C/C++). Você aprenderá a transpilar código direto pro kernel.

## Estágio 1: O programa "Return 0"
Você compilará seu primeiro binário.
A sua tarefa inicial é reconhecer um programa super simples na linguagem de origem (como `int main() { return 0; }`) e retornar código em `Assembly` puro correspondente.

### Como testar localmente
```bash
npm install
npm run start source.txt
```

### Submissão
Quando achar que o código funciona:
```bash
devquest submit
```
