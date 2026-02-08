/**
 * Maps backend result object → UI-friendly card object
 */
export function mapResultToCard(result) {
  const totalVotes = Number(result.total_votes || 0)
  const winnerVotes = Number(result.winner_votes || 0)

  return {
    /* IDs */
    id: result.election_id,

    /* Election info */
    title: result.title,
    level: result.election_level?.toLowerCase(),

    /* Location (priority-based) */
    location:
      result.ward_number
        ? `Ward ${result.ward_number}, ${result.village_name}`
        : result.village_name ||
          result.mandal_name ||
          result.assembly_name ||
          result.district_name ||
          result.state_name ||
          '',

    state: result.state_name,
    district: result.district_name,
    assembly: result.assembly_name,
    mandal: result.mandal_name,
    village: result.village_name,
    wardNumber: result.ward_number,

    /* Result info */
    totalVotes,
    votesCast: totalVotes, // backend doesn't give votes_cast separately
    turnoutPercent: totalVotes
      ? Math.round((winnerVotes / totalVotes) * 100)
      : 0,

    /* Winner info */
    winner: result.winner_name || '—',
    winnerVotes,
    winnerParty: null, // not provided by API

    /* Status & dates */
    status: result.result_published ? 'published' : 'pending',
    publishedAt: result.result_published_at,
    createdAt: result.created_at,
  }
}
