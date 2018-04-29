import { addTodo, removeTodo, toggleTodo } from './actions'
import app from './reducers'
import { createStore } from 'redux'

const store = createStore(app)

console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('Alice'))
store.dispatch(addTodo('Bory'))
store.dispatch(addTodo('Charlotte'))
store.dispatch(toggleTodo(1))
store.dispatch(removeTodo(0))
store.dispatch(addTodo('Daisy'))

unsubscribe()
