import {INPUT_CHANGE, ADD_LIST, DEL_ITEM} from './actionTypes'

const defaultState = {
  list: [
    {content: '学习react基础'},
    {content: '学习react-router'},
    {content: '学习react-redux'}
  ],
  inputVal: ''
}
const reducers = (state = defaultState, action) => {
  // console.log(state,action)
  if(action.type === INPUT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.payload
    return newState
  }
  if(action.type === ADD_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push({content: action.payload})
    newState.inputVal = ''
    // console.log(newState)
    return newState
  }

  // if(action.type === 'INPUT_CLEAR') {
  //   const newState = JSON.parse(JSON.stringify(state))
  //   newState.inputVal = ''
  //   return newState
  // }
  if(action.type === DEL_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.payload,1)
    return newState
  }
  return state
}

export default reducers