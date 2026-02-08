export function mapCandidatesTable(e) {
  return {
    id: e.candidate_id,
    img_url:e.photo_url,
    name: e.name,
    mobile: e.mobile,
    location: `${e.village}, ${e.mandal}, ${e.district}`,
    status: e.status?.toLowerCase(), // safe
    votingStart: e.voting_start,
    nominated: e.nominated_at,
    district: e.district,
    ward: e.ward,
    assembly: e.assembly,
    election: e.election,
  }
}
