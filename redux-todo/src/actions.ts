export const enum Action {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export function addTodo (note: string) {
  return {
    type: Action.ADD_TODO,
    note
  }
}

export function removeTodo (index: number) {
  return {
    type: Action.REMOVE_TODO,
    index
  }
}

export function toggleTodo (index: number) {
  return {
    type: Action.TOGGLE_TODO,
    index
  }
}
