import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export const loginFirebase = async (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)

export const isRightAccessUser = (email: string, uid: string): boolean =>
  (email === process.env.CURRENT_OTECIR_EMAIL && uid === process.env.CURRENT_OTECIR_USER_ID) ||
  (email === process.env.NEW_OTECIR_EMAIL && uid === process.env.NEW_OTECIR_USER_ID)
