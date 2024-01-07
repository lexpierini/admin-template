import User from '@/model/User'
import firebase from '../../firebase/config'
import { ReactNode, createContext, useEffect, useState } from 'react'
import route from 'next/router'
import Cookies from 'js-cookie'

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextProps = {
  user?: User
  googleLogin?: () => Promise<void>
  logout?: () => Promise<void>
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

const cookieManagement = (logged: boolean) => {
  if (logged) {
    Cookies.set('admin-template-lexpierini-auth', logged, {
      expires: 7,
    })
  } else {
    Cookies.remove('admin-template-lexpierini-auth')
  }
}

export function AuthProvider(props: AuthProviderProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User>(null)

  const sectionSetup = async (firebaseUser: firebase.User) => {
    if (firebaseUser?.email) {
      const user = await normalizedUser(firebaseUser)
      setUser(user)
      cookieManagement(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      cookieManagement(false)
      setLoading(false)
      return false
    }
  }

  const googleLogin = async () => {
    try {
      setLoading(true)
      const res = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      sectionSetup(res.user)
      route.push('/')
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await sectionSetup(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-lexpierini-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(sectionSetup)
      return () => cancel()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, googleLogin, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
