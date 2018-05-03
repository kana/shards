import React from 'react'

import { Todo } from '../reducers'

interface Props {
  index: number
  todo: Todo
}

class TodoItem extends React.PureComponent<Props> {
  render () {
    const { todo } = this.props
    return (
      <li>
        <label>
          <input type='checkbox' checked={todo.done} onClick={this.handleClick}/>
          {todo.note}
        </label>
      </li>
    )
  }

  private readonly handleClick = () => {
    console.log(this.props.index)
  }
}

export default TodoItem
