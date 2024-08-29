import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_AURL
  const url = new URL(path, baseUrl)

  return fetch(url, init)
}

// fica tipo assim
// api('/products')

// https://localhost:3000/api/products
