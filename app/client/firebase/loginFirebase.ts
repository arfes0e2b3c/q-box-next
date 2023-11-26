import { appBaseUrl } from '@/consts'

export const loginFirebase = async (email: string, password: string) => {
  const res = await fetch(`${appBaseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  return data
}
