import ElectionCardSkeleton from './ElectionCardSkeleton'

export default function ElectionsListSkeleton({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ElectionCardSkeleton key={i} />
      ))}
    </div>
  )
}
