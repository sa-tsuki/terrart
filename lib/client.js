import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'terrart',
  apiKey: process.env.API_KEY,
})
