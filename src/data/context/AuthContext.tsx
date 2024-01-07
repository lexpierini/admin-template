import User from '@/model/User'
import firebase from '../../firebase/config'
import { ReactNode, createContext, useState } from 'react'
import route from 'next/router'

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
    const res = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

    if (res.user?.email) {
      const user = await normalizedUser(res.user)
      setUser(user)
      route.push('/')
    }
  }

  return <AuthContext.Provider value={{ user, googleLogin }}>{props.children}</AuthContext.Provider>
}

export default AuthContext
