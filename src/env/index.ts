import 'dotenv/config'
import { z } from 'zod'

// QUAL FORMATO DAS VARIAVEIS DE AMBIENTE
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

// Valida as variáveis de ambiente atuais (process.env) com base no esquema definido, garantindo que elas atendam às expectativas (neste caso, garantindo que DATABASE_URL existe e é uma string). O resultado dessa validação é armazenado em env, que então contém as variáveis de ambiente validadas e prontas para uso no aplicativo.
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('🚨 Invalid enviroment variables', _env.error.format)
  throw new Error('Invalid enviroment variables.')
}

export const env = _env.data
