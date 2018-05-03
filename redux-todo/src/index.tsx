import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { addTodo } from './actions'
import App from './components/App'
import appReducer from './reducers'

const store = createStore(appReducer)

store.dispatch(addTodo('Ada'))
store.dispatch(addTodo('BCPL'))
store.dispatch(addTodo('C#'))
store.dispatch(addTodo('Dart'))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementsByTagName('body')[0]
)
