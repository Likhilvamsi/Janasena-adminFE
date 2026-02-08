export default function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="w-10 h-10 rounded-full bg-red-100 text-primary-red flex items-center justify-center font-semibold text-sm">
      {initials}
    </div>
  )
}
