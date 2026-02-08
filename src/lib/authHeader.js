export function authHeader(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}
