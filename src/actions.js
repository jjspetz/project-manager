export function apiCall(data) {
  return {
    type: 'API_CALL',
    tasks: data
  }
}

export function toggleInput(data) {
  return {
    type: 'TOGGLE_INPUT',
    open: data
  }
}
