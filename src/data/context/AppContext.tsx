import { ReactNode, createContext, useEffect, useState } from 'react'

type AppProviderProps = {
  children: ReactNode
}

type AppContextProps = {
  theme: string
  changeTheme: () => void
}

const AppContext = createContext<AppContextProps>({
  theme: '',
  changeTheme: () => {},
})

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState<string>('')

  const changeTheme = () => {
    const newTheme = theme === '' ? 'dark' : ''
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setTheme(savedTheme)
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContext
