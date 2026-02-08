import ElectionCard from './ElectionCard'

export default function ElectionsList({ elections }) {
  if (!elections.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        No elections found
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {elections.map(election => (
        <ElectionCard key={election.id} election={election} />
      ))}
    </div>
  )
}
