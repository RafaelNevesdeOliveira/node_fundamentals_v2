'use strict'
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vitest_1 = require('vitest')
const supertest_1 = __importDefault(require('supertest'))
const app_1 = require('../src/app')
const node_child_process_1 = require('node:child_process')
;(0, vitest_1.describe)('Transactions routes', () => {
  ;(0, vitest_1.beforeAll)(async () => {
    await app_1.app.ready()
  })
  ;(0, vitest_1.afterAll)(async () => {
    await app_1.app.close()
  })
  ;(0, vitest_1.beforeEach)(() => {
    ;(0, node_child_process_1.execSync)('npm run knex migrate:rollback --all')
    ;(0, node_child_process_1.execSync)('npm run knex migrate:latest')
  })
  ;(0, vitest_1.it)('O usuário consegue criar uma nova transição', async () => {
    const response = await (0, supertest_1.default)(app_1.app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
    ;(0, vitest_1.expect)(response.statusCode).toEqual(201)
  })
  ;(0, vitest_1.it)(
    'Deve ser possível listar todas as transações',
    async () => {
      const createTransactionResponse = await (0, supertest_1.default)(
        app_1.app.server,
      )
        .post('/transactions')
        .send({
          title: 'New transaction',
          amount: 5000,
          type: 'credit',
        })
      const cookies = createTransactionResponse.get('Set-Cookie')
      const listTransactionsResponse = await (0, supertest_1.default)(
        app_1.app.server,
      )
        .get('/transactions')
        .set('Cookie', cookies)
        .expect(200)
      ;(0, vitest_1.expect)(listTransactionsResponse.body.transactions).toEqual(
        [
          vitest_1.expect.objectContaining({
            title: 'New transaction',
            amount: 5000,
          }),
        ],
      )
    },
  )
  ;(0, vitest_1.it)('Deve ser possível uma especifica transação', async () => {
    const createTransactionResponse = await (0, supertest_1.default)(
      app_1.app.server,
    )
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
    const cookies = createTransactionResponse.get('Set-Cookie')
    const listTransactionsResponse = await (0, supertest_1.default)(
      app_1.app.server,
    )
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)
    const transactionId = listTransactionsResponse.body.transactions[0].id
    const listTransactionResponse = await (0, supertest_1.default)(
      app_1.app.server,
    )
      .get(`/transactions/${transactionId}`)
      .set('Cookie', cookies)
      .expect(200)
    ;(0, vitest_1.expect)(listTransactionResponse.body.transaction).toEqual(
      vitest_1.expect.objectContaining({
        title: 'New transaction',
        amount: 5000,
      }),
    )
  })
  ;(0, vitest_1.it)('Deve ser possível listar resumo', async () => {
    const createTransactionResponse = await (0, supertest_1.default)(
      app_1.app.server,
    )
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
    const cookies = createTransactionResponse.get('Set-Cookie')
    await (0, supertest_1.default)(app_1.app.server)
      .post('/transactions')
      .set('Cookie', cookies)
      .send({
        title: 'debit Transaction',
        amount: 2000,
        type: 'debit',
      })
    const summaryResponse = await (0, supertest_1.default)(app_1.app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies)
      .expect(200)
    ;(0, vitest_1.expect)(summaryResponse.body.summary).toEqual({
      amount: 3000,
    })
  })
})
