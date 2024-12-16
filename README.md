# 🔮 DARK BANK 🔮

Este é um projeto de console em TypeScript que simula as operações de um sistema bancário. Ele permite criar contas, listar todas as contas, buscar contas específicas, realizar transações financeiras como saques, depósitos e transferências, além de atualizar e apagar contas.

## Funcionalidades
- Criar uma nova conta bancária
- Listar todas as contas registradas
- Buscar conta por número
- Atualizar dados de uma conta existente
- Apagar contas
- Realizar saques, depósitos e transferências entre contas
- Buscar conta pelo nome do titular

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Linguagem utilizada para tipagem estática.
- **readline-sync**: Biblioteca para entrada de dados no terminal.
- **Colors Utility**: Configuração de cores para estilizar as mensagens no console.

## Estrutura do Projeto
O código principal está estruturado no arquivo `Menu.ts`, que implementa o menu interativo com as operações disponíveis no sistema bancário.


## Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/emilyestvz/projeto_conta_bancaria.git
   cd projeto_conta_bancaria

2. Instale as dependências:
   ```bash
   npm install

3. Compile o projeto TypeScript:
   ```bash
   tsc

4. Execute o programa:
  ```bash
  node dist/Menu.ts
