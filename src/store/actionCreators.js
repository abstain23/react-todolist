import {INPUT_CHANGE, ADD_LIST, DEL_ITEM} from './actionTypes'

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