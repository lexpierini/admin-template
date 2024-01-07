export default interface User {
  id: string
  email: string | null
  name: string | null
  token: string
  provider: string | undefined
  imageUrl: string | null
}
