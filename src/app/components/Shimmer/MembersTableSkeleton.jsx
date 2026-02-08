export default function MembersTableSkeleton({ rows = 6 }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden mt-4 animate-pulse">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-4">Member</th>
            <th className="px-6 py-4">Contact</th>
            <th className="px-6 py-4">District</th>
            <th className="px-6 py-4">Constituency</th>
            <th className="px-6 py-4">Voted</th>
            <th className="px-6 py-4">Joined</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td className="px-6 py-4">
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </td>

              <td className="px-6 py-4 space-y-2">
                <div className="h-3 w-40 bg-gray-200 rounded" />
                <div className="h-3 w-28 bg-gray-200 rounded" />
              </td>

              <td className="px-6 py-4">
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </td>

              <td className="px-6 py-4 space-y-2">
                <div className="h-3 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-20 bg-gray-200 rounded" />
              </td>

              <td className="px-6 py-4">
                <div className="h-5 w-16 bg-gray-200 rounded-full" />
              </td>

              <td className="px-6 py-4">
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
