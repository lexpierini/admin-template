type AuthInputProps = {
  label: string
  value: string
  required?: boolean
  type?: 'text' | 'email' | 'password'
  setValue: (value: string) => void
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="mt-2 flex flex-col">
      <label>{props.label}</label>
      <input
        required={props.required}
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.setValue?.(e.target.value)}
        className="mt-2 rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none"
      />
    </div>
  )
}
