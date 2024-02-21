# Regras do software 🛠️

### Requisitos da aplicação

- **Requisitos funcionais:** O que o software faz. Eles são específicos, mensuráveis, e diretamente relacionados às funcionalidades do sistema.

- **Regras de negócio:** Como o software se encaixa nas operações e estratégias da organização. Elas moldam os requisitos funcionais e não funcionais, garantindo que o software atenda às necessidades específicas do negócio.

- **Regras não funcionais:** Como o software faz o que faz. Esses requisitos definem os padrões de qualidade do sistema, incluindo desempenho, segurança, e usabilidade.

# RF

- [x] 0 usuário deve poder criar uma nova transação;
- [x] 0 usuário deve pode obter um resumo da sua conta;
- [x] 0 usuário deve poder listar todas transações que já ocorreram;
- [x] 0 usuario deve poder visualizar uma transagao inica;

# RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtraira
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] 0 usuário só pode visualizar transações o qual ele

```js
// pacote do fastify para cookies
npm i @fastify/cookie    
```