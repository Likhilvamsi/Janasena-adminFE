import ResultCard from './ResultCard'

export default function ResultsList({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No results found
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {results.map(result => (
        <ResultCard key={result.id} result={result} />
      ))}
    </div>
  )
}
