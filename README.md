# Migrations do Knex com SQLite: Um Guia Didático 🛠️

Imagine que **migrations** do Knex com SQLite são como **receitas detalhadas** para montar ou modificar o móvel que representa o seu banco de dados. Cada migration é uma instrução passo a passo que orienta na criação, alteração ou remoção de partes desse móvel, como tabelas e colunas.

## Como Funciona? 📋

### 1. **Instalar Ferramentas 🧰**

- **Primeiro Passo:** Adicione as ferramentas na sua caixa de ferramentas instalando o **Knex** e o **SQLite** no seu projeto Node.js.

### 2. **Configurar 📐**

- **Segundo Passo:** Escolha o local de trabalho configurando o Knex para usar o SQLite. Isso é como decidir em qual quarto da casa o móvel será montado, especificando o caminho do arquivo do banco de dados.

### 3. **Escrever a Receita 📝**

- **Terceiro Passo:** Elabore instruções detalhadas para montar uma parte do móvel. Isso é feito criando um arquivo de migration com comandos para adicionar ou modificar estruturas no banco de dados.

### 4. **Seguir a Receita 🔧**

- **Quarto Passo:** Execute as instruções de montagem ou modificação seguindo a receita, aplicando a migration ao banco de dados.

## Benefícios? ✅

- **Clareza:** Ter um manual de instruções ajuda a montar o móvel corretamente, sem perder peças.
- **Organização:** Mantém o banco de dados estruturado e facilita o entendimento de sua evolução.
- **Colaboração:** Permite que a equipe saiba exatamente como o banco de dados foi construído ou alterado.
- **Flexibilidade:** Facilita implementar mudanças sem desorganizar o esquema do banco.

## Conclusão 🏁

Migrations com Knex e SQLite funcionam como um **manual de instruções** detalhado para a montagem e manutenção do seu móvel, ou melhor, do seu banco de dados. É uma abordagem clara, organizada e segura para gerenciar a estrutura do banco, permitindo ajustes e melhorias com facilidade e precisão.

```js
//comando para criar migration

npm run knex -- migrate:make change-name-to-title

// para rodar a migration

npm run knex -- migrate:latest

//CASO FIZER MERDA E QUERO VOLTAR ANTES DE SUBIR ESSA MIGRATION

npm run knex -- midrate:rollback
```

## VARIAVEIS DE AMBIENTE

```js
// para poder ler variaveis de ambiente no projeto
npm i dotenv

// ZOD validacao de dados
npm i zod 
```