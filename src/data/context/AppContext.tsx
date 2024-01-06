import { ReactNode, createContext, useState } from 'react'

type AppProviderProps = {
  children: ReactNode
}

type Theme = string | ''

type AppContextProps = {
  theme: Theme
  changeTheme: () => void
}

const AppContext = createContext<AppContextProps>({
  theme: '',
  changeTheme: () => {},
})

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('')

  const changeTheme = () => {
    setTheme(theme === '' ? 'dark' : '')
  }

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
