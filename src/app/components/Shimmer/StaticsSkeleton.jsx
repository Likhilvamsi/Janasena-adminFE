export function StaticsSkeleton() {
  return (
    <section className="flex gap-3 w-full mb-4 animate-pulse">
      {[1, 2, 3, 4].map(i => (
        <div
          key={i}
          className="border bg-white p-4 rounded-md w-1/4 space-y-3"
        >
          <div className="h-3 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-16 bg-gray-200 rounded" />
        </div>
      ))}
    </section>
  )
}
