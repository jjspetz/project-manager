export function apiCall(data) {
  return {
    type: 'API_CALL',
    tasks: data
  }
}

export function addTask(data) {
  return {
    type: 'ADD_TASK',
    tasks: data
  }
}

export function removeTask(data) {
  return {
    type: 'REMOVE_TASK',
    tasks: data
  }
}
