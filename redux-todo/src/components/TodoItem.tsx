import React from 'react'

import { Todo } from '../reducers'

interface Props {
  todo: Todo
  onClick (): void
}

class TodoItem extends React.PureComponent<Props> {
  render () {
    const {
      todo,
      onClick
    } = this.props
    return (
      <li>
        <label>
          <input type='checkbox' checked={todo.done} onClick={onClick}/>
          {todo.note}
        </label>
      </li>
    )
  }
}

export default TodoItem
