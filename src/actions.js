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

export function togglePopover(data) {
  return {
    type: 'TOGGLE_DROP',
    open: data
  }
}
export function setProvider(provider) {
  return {
    type: 'SET_PROVIDER',
    provider: provider
  }
}

export function setAnchorEl(element) {
  return {
    type: 'SET_ELEM',
    element: element,
  }
}
