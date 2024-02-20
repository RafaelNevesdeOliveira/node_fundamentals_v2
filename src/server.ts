import fastify from 'fastify'
import { knex } from './database'
import { env } from './env/index'

const app = fastify()

// sqlite_schema --> tabela padrao
app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server running on ${env.PORT}!`)
  })
