export default function CandidateCardSkeleton() {
  return (
    <div className="w-full min-w-0 bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col animate-pulse">
      {/* Image */}
      <div className="h-48 w-full bg-gray-200" />

      {/* Content */}
      <div className="p-5 space-y-3 flex-1 w-full">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-1/2 bg-gray-200 rounded" />
        <div className="h-3 w-2/3 bg-gray-200 rounded" />
      </div>

      {/* Actions */}
      <div className="p-4 pt-0 flex items-center gap-3 w-full">
        <div className="h-10 flex-1 bg-gray-200 rounded-lg" />
        <div className="h-10 w-10 bg-gray-200 rounded-lg" />
        <div className="h-10 w-10 bg-gray-200 rounded-lg" />
      </div>
    </div>
  )
}
