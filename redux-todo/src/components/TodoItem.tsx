import React from 'react'

import { Todo } from '../reducers'

interface Props {
  todo: Todo
}

class TodoItem extends React.PureComponent<Props> {
  render () {
    const { todo } = this.props
    return (
      <li>
        <label>
          <input type='checkbox' checked={todo.done}/>
          {todo.note}
        </label>
      </li>
    )
  }
}

export default TodoItem
