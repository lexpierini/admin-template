import { MoonIcon, SunIcon } from '../icons'

type ChangeThemeButtonProps = {
  theme: string | ''
  changeTheme: () => void
}

export default function ChangeThemeButton(props: ChangeThemeButtonProps) {
  return props.theme === 'dark' ? (
    <div
      onClick={props.changeTheme}
      className="hidden h-8 w-14 cursor-pointer items-center rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 p-1 sm:flex lg:w-24"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-yellow-600">
        {SunIcon(4)}
      </div>
      <div className="ml-4 hidden items-center lg:flex">
        <span className="text-sm">Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.changeTheme}
      className="hidden h-8 w-14 cursor-pointer items-center justify-end rounded-full bg-gradient-to-r from-gray-500 to-gray-900 p-1 sm:flex lg:w-24"
    >
      <div className="ml-2 mr-5 hidden items-center text-gray-300 lg:flex">
        <span className="text-sm">Dark</span>
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-yellow-300">
        {MoonIcon(4)}
      </div>
    </div>
  )
}
