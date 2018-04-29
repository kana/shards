import { Action } from './actions'
import { combineReducers } from 'redux'

interface TodoItem {
  done: boolean
  note: string
}

function todos (state: TodoItem[] = [], action) {
  switch (action.type) {
    case Action.ADD_TODO:
      return [
        ...state,
        {
          done: false,
          note: action.note
        }
      ]
    case Action.REMOVE_TODO:
      return state.filter((_, i) => i !== action.index)
    case Action.TOGGLE_TODO:
      return state.map((todo, i) => {
        if (i === action.index) {
          return {
            ...todo,
            done: !todo.done
          }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

export default combineReducers({
  todos
})
