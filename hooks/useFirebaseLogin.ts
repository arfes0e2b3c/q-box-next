import { useCookies } from 'react-cookie'
import { loginFirebase } from '../app/client/loginFirebase'

export const useFirebaseLogin = () => {
  const [_, setCookie] = useCookies(['access_token'])

  const firebaseLogin = async (email: string, password: string) => {
    const res = await loginFirebase(email, password)
    setCookie('access_token', await res.user.stsTokenManager.accessToken)
    return !!res
  }

  return firebaseLogin
}
