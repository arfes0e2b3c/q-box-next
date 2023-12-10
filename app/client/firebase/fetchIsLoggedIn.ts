export const fetchIsLoggedIn = async (email: string, uid: string) => {
  const res = await fetch(`/api/login?email=${email}&uid=${uid}`)
  const data: boolean = await res.json()
  return data
}
