import useAuth from '@/data/hook/useAuth'
import { AdjustmentsVerticalIcon, ArrowLeftEndOnRectangle, BellIcon, HomeIcon } from '../icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

export default function SideMenu() {
  const { logout } = useAuth()

  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900">
      <div className="flex h-20 w-20 flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={AdjustmentsVerticalIcon} />
        <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
      </ul>
      <ul>
        <MenuItem
          text="Logout"
          icon={ArrowLeftEndOnRectangle}
          onClick={logout}
          className="text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:text-white"
        />
      </ul>
    </aside>
  )
}
