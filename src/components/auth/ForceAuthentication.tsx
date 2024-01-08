import useAuth from '@/data/hook/useAuth'
import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import loadingGif from 'public/images/loading.gif'
import { ReactNode } from 'react'

type ForceAuthenticationProps = {
  children?: ReactNode
}

export default function ForceAuthentication(props: ForceAuthenticationProps) {
  const { user, loading } = useAuth()

  const renderContent = () => (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                if(!document.cookie?.includes("admin-template-lexpierini-auth")) {
                    window.location.href = "/authentication"
                }
            `,
          }}
        />
      </Head>
      {props.children}
    </>
  )

  const renderLoading = () => (
    <div className="flex h-screen items-center justify-center">
      <Image src={loadingGif} alt="loading..." />
    </div>
  )

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    router.push('/authentication')
    return null
  }
}
