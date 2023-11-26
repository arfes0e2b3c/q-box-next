import { appBaseUrl } from '@/consts'

export const fetchIsLoggedIn = async (email: string, uid: string) => {
  const res = await fetch(`${appBaseUrl}/api/login?email=${email}&uid=${uid}`)
  const data: boolean = await res.json()
  return data
}
