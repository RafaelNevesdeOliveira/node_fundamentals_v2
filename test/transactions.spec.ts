import { expect, it, describe, afterEach, beforeEach } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeEach(async () => {
  await app.ready()
})

afterEach(async () => {
  await app.close()
})

describe('Transactions routes', () => {
  it('O usuário consegue criar uma nova transição', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    })

    expect(response.statusCode).toEqual(201)
  })
})
