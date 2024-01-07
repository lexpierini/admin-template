import AuthInput from '@/components/auth/AuthInput'
import { WarningIcon } from '@/components/icons'
import useAuth from '@/data/hook/useAuth'
import { useState } from 'react'

export default function authentication() {
  const { user, googleLogin } = useAuth()

  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const showError = (msg: string, time: number) => {
    setError(msg) // An error occurred!
    setTimeout(() => setError(null), time * 1000)
  }

  const submit = () => {
    if (mode === 'login') {
      console.log('log in')
    } else {
      console.log('Sing up')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Authentication screenshots"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="mb-5 text-2xl font-bold">
          {mode === 'login' ? 'Sign in with your account' : 'Sign up now'}
        </h1>

        {error && (
          <div className="my-2 flex items-center rounded-lg border border-red-700 bg-red-400 px-5 py-3 text-white">
            {WarningIcon}
            <span className="ml-3">{error}</span>
          </div>
        )}

        <AuthInput label="Email" type="email" required value={email} setValue={setEmail} />
        <AuthInput
          label="Password"
          type="password"
          required
          value={password}
          setValue={setPasword}
        />

        <button
          className="mt-6 w-full rounded-lg bg-indigo-500 px-4 py-3 text-white hover:bg-indigo-400"
          onClick={submit}
        >
          {mode === 'login' ? 'Sign in' : 'Sign up'}
        </button>
        <hr className="my-6 w-full border-gray-300" />
        <button
          className="w-full rounded-lg bg-red-500 px-4 py-3 text-white hover:bg-red-400"
          onClick={googleLogin}
        >
          Sign in with your Google account
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Not registered yet?
            <a
              onClick={() => setMode('register')}
              className="houver:text-blue-700 ml-1 cursor-pointer font-semibold text-blue-500"
            >
              Sign up for free
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Already registered?
            <a
              onClick={() => setMode('login')}
              className="houver:text-blue-700 ml-1 cursor-pointer font-semibold text-blue-500"
            >
              Sign in now
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
