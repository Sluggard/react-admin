import commonState from '../state/common'

const collapsed = (state = commonState.collapsed, action) => {
  switch (action.type) {
    case 'SET_COLLAPSED':
      return action.data
    default:
      return state
  }
}
export default collapsed
