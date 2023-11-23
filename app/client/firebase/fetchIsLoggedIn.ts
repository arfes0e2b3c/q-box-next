export const fetchIsLoggedIn = async (email: string, uid: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login?email=${email}&uid=${uid}`)
  const data: boolean = await res.json()
  return data
}
