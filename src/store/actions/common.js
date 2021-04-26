const setCollapsed = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_COLLAPSED', data: data })
  }
}

export default setCollapsed
