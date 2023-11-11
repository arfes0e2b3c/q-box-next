'use client'
import { baseFont } from '@/consts/fonts'
import { form, formInner, formInput, formTitle, loginContainer, submitButton } from './page.css'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie'

export default function Login() {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [_, setCookie] = useCookies()

  const onSubmit = handleSubmit(async (event) => {
    const { email, password } = event
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      setCookie('access_token', await res.user.getIdToken())
      await router.push('/answer')
    } catch (error) {
      await alert('ログイン時にエラーが発生しました\n' + error)
    }
  })
  return (
    <main>
      <div className={loginContainer}>
        <div className={form}>
          <form className={formInner} onSubmit={onSubmit}>
            <h2 className={[formTitle, baseFont.className].join(' ')}>管理者としてログイン</h2>
            <input
              className={[formInput, baseFont.className].join(' ')}
              id='usernameTxt'
              type='email'
              placeholder='メールアドレス'
              {...register('email')}
            />
            <input
              className={[formInput, baseFont.className].join(' ')}
              id='passwordTxt'
              type='password'
              placeholder='パスワード'
              {...register('password')}
            />
            <button type='submit' className={submitButton}>
              ログインする
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
