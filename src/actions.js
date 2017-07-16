export function apiCall(data) {
  return {
    type: 'API_CALL',
    tasks: data
  }
}
