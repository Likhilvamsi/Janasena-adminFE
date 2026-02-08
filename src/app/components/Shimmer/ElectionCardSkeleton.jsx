export default function ElectionCardSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-6 space-y-4 animate-pulse">
      {/* Top badges */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-gray-200 rounded-md" />
          <div className="h-5 w-20 bg-gray-200 rounded-md" />
        </div>
        <div className="h-5 w-5 bg-gray-200 rounded-full" />
      </div>

      {/* Title */}
      <div className="space-y-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-1/2 bg-gray-200 rounded" />
      </div>

      {/* Meta info */}
      <div className="flex gap-4">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-3 w-24 bg-gray-200 rounded" />
      </div>

      {/* Turnout */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="h-3 w-20 bg-gray-200 rounded" />
          <div className="h-3 w-10 bg-gray-200 rounded" />
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full" />
        <div className="h-3 w-40 bg-gray-200 rounded" />
      </div>
    </div>
  )
}
