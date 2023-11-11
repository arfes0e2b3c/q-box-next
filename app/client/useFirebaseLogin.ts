import { useCookies } from 'react-cookie'

export const useFirebaseLogin = () => {
  const [_, setCookie] = useCookies(['access_token'])

  const firebaseLogin = async (email: string, password: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    setCookie('access_token', await data.user.stsTokenManager.accessToken)
    return !!data
  }

  return firebaseLogin
}
