export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo (note: string): { type: typeof ADD_TODO, note: string } {
  return {
    type: ADD_TODO,
    note
  }
}

export function removeTodo (index: number): { type: typeof REMOVE_TODO, index: number } {
  return {
    type: REMOVE_TODO,
    index
  }
}

export function toggleTodo (index: number): { type: typeof TOGGLE_TODO, index: number } {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export type ActionType =
  ReturnType<typeof addTodo> |
  ReturnType<typeof removeTodo> |
  ReturnType<typeof toggleTodo>
