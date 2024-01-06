import { AdjustmentsVerticalIcon, BellIcon, HomeIcon } from '../icons'
import MenuItem from './MenuItem'

export default function SideMenu() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={AdjustmentsVerticalIcon} />
        <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
      </ul>
    </aside>
  )
}
