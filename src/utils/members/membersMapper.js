export function mapMembersTable(e) {
  return {
    id: e.member_id,               // ✅ used as key
    name: e.name,                  // ✅ used in table
    email: e.email,
    phone: e.mobile,
    district: e.district,
    constituency: e.constituency,
    area: '-',
    status: e.is_active ? 'active' : 'inactive',
    voted: false,
    joined: new Date(e.joined).toLocaleDateString(),
  }
}
