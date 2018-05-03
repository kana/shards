import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, ActionType } from './actions'
import { combineReducers } from 'redux'

export interface Todo {
  done: boolean
  note: string
}

export interface AppState {
  todos: Todo[]
}

function todos (state: Todo[] = [], action: ActionType) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          done: false,
          note: action.note
        }
      ]
    case REMOVE_TODO:
      return state.filter((_, i) => i !== action.index)
    case TOGGLE_TODO:
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
