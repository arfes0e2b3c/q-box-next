import { baseFont } from '@/consts/fonts'
import { form, formInner, formInput, formTitle, loginContainer, submitButton } from './page.css'

export default function Login() {
  return (
    <main>
      <div className={loginContainer}>
        <div className={form}>
          <form className={formInner}>
            <h2 className={[formTitle, baseFont.className].join(' ')}>管理者としてログイン</h2>
            <input
              className={[formInput, baseFont.className].join(' ')}
              id='usernameTxt'
              type='email'
              placeholder='メールアドレス'
            />
            <input
              className={[formInput, baseFont.className].join(' ')}
              id='passwordTxt'
              type='password'
              placeholder='パスワード'
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
