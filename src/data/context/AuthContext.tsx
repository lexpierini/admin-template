import User from '@/model/User'
import firebase from '../../firebase/config'
import { ReactNode, createContext, useState } from 'react'

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextProps = {
  user?: User
  googleLogin?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

const normalizedUser = async (firebaseUser: firebase.User): Promise<User> => {
  const token = await firebaseUser.getIdToken()
  return {
    id: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  }
}

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>(null)

  const googleLogin = async () => {
    console.log('login Google...')
  }

  return <AuthContext.Provider value={{ user, googleLogin }}>{props.children}</AuthContext.Provider>
}

export default AuthContext
