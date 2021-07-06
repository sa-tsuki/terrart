import { createClient } from 'microcms-js-sdk';

export const blogs = createClient({
  serviceDomain: 'terrart',
  apiKey: process.env.API_KEY,
});