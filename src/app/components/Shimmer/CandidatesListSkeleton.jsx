import CandidateCardSkeleton from './CandidateCardSkeleton'

export default function CandidatesListSkeleton({ count = 6 }) {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CandidateCardSkeleton key={i} />
      ))}
    </div>
  )
}
