export function mapElectionToCard(e) {
  return {
    id: e.election_id,
    title: e.title,
    location: `${e.village}, ${e.mandal}, ${e.district}`,
    level: 'ward',
    status: e.status.toLowerCase(),
    date: e.voting_start,
    time: formatTime(e.voting_start, e.voting_end),
    voters: e.total_voters,
    votesCast: e.total_votes_polled,
  }
}

function formatTime(start, end) {
  const s = new Date(start).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })
  const e = new Date(end).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `${s} - ${e}`
}
