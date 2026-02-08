export default function ResultsTable({ items }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Election</th>
            <th>Level</th>
            <th>Winner</th>
            <th>Votes</th>
            <th>Location</th>
            <th>Published</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.election_id} className="border-t">
              <td className="p-3 font-medium">{item.title}</td>
              <td>{item.election_level}</td>
              <td>{item.winner_name}</td>
              <td>
                {item.winner_votes}/{item.total_votes} ({item.percentage}%)
              </td>
              <td className="text-xs">
                {item.state_name} → {item.district_name} → {item.assembly_name}
              </td>
              <td>
                {item.result_published ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
