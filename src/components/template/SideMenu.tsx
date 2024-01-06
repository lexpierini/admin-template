import { AdjustmentsVerticalIcon, ArrowLeftEndOnRectangle, BellIcon, HomeIcon } from '../icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

export default function SideMenu() {
  return (
    <aside className="flex flex-col">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
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
          onClick={() => alert('logout')}
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  )
}
