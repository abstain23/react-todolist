import {INPUT_CHANGE, ADD_LIST, DEL_ITEM, GET_LIST, TEST_THUNK, TEST_SAGA} from './actionTypes'

export const inputChange = (payload) => {
  return {
    type: INPUT_CHANGE,
    payload
  }
}

export const addList = (payload) => {
  return {
    type: ADD_LIST,
    payload
  }
}

export const delItem = (payload) => {
  return {
    type: DEL_ITEM,
    payload
  }
}

export const getList = (payload) => {
  return {
    type: GET_LIST,
    payload
  }
}

export const testThunk = (payload) => {
  return (dispatch) => {
    console.log(dispatch)
    const action = getList('payload')
    dispatch(action)
  }
}

export const testSaga = (payload) => {
  return {
    type: TEST_SAGA,
    payload
  }
}