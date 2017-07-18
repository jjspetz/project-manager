export function apiCall(data) {
  return {
    type: 'API_CALL',
    tasks: data,
    projects: data.projects
  }
}

export function toggleInput(data) {
  return {
    type: 'TOGGLE_INPUT',
    open: data
  }
}

// export function updateInput(data) {
//   return {
//     type: 'UPDATE_INPUT',
//     inputVal: data
//   }
// }

export function toggleSidebar(data) {
  return {
    type: 'TOGGLE_SIDEBAR',
    open: data
  }
}

export function toggleProjectInput(data) {
  return {
    type: 'TOGGLE_PROJECT',
    open: data
  }
}

export function setCurrentProject(data) {
  return {
    type: 'CHANGE_PROJECT',
    project: data
  }
}
