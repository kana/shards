import React from 'react'
import { connect } from 'react-redux'

import { AppState, TodoItem } from '../reducers'

interface Props {
  todos: TodoItem[]
}

function mapStateToProps (state: AppState): Props {
  return {
    todos: state.todos
  }
}

class TodoList extends React.PureComponent<Props> {
  render () {
    return (
      <ul>
        {this.props.todos.map((todo, i) => (
          <li key={i}>
            <label>
              <input type='checkbox' checked={todo.done}/>
              {todo.note}
            </label>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(mapStateToProps)(TodoList)
