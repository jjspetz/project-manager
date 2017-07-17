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

export function toggleSidebar(data) {
  return {
    type: 'TOGGLE_SIDEBAR',
    open: data
  }
}
