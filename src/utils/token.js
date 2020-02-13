export function getAuthorization() {
  const authorization = localStorage.getItem('token');
  return authorization ? { headers: { 'Authorization': authorization } } : null;
}