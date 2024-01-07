import useAuth from '@/data/hook/useAuth'
import Link from 'next/link'

type UserAvatarProps = {
  className?: string
}

export default function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth()

  return (
    <Link href="/profile">
      <img
        src={user?.imageUrl ?? '/images/avatar.svg'}
        alt="User avatar"
        className={`h-10 w-10 cursor-pointer rounded-full ${props.className}`}
      />
    </Link>
  )
}
