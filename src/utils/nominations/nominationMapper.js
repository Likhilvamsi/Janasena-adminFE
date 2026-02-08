export function mapNominationCard(n) {
  return {
    id: n.nomination_id,
    name: n.member_name,
    mobile: n.mobile,
    status: n.status.toLowerCase(),
    appliedAt: n.applied_at,
    photo: n.photo_url,
    profilePhoto: n.profile_photo_url,
    electionTitle: n.election?.title || '—',
    electionStatus: n.election?.status || '—',
  }
}
