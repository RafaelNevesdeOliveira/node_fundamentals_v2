import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']).default('sqlite'),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
})

// Valida as variáveis de ambiente atuais (process.env) com base no esquema definido, garantindo que elas atendam às expectativas (neste caso, garantindo que DATABASE_URL existe e é uma string). O resultado dessa validação é armazenado em env, que então contém as variáveis de ambiente validadas e prontas para uso no aplicativo.
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('⚠️ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
