import React from 'react'

import TodoList from './TodoList'

interface Props {}

class App extends React.PureComponent<Props> {
  render () {
    return (
      <TodoList/>
    )
  }
}

export default App
