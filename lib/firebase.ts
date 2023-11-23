export const isRightAccessUser = (email: string, uid: string): boolean =>
  email === process.env.NEXT_PUBLIC_OTECIR_EMAIL && uid === process.env.NEXT_PUBLIC_OTECIR_USER_ID
