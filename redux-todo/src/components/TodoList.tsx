import React from 'react'
import { connect } from 'react-redux'

import { AppState, Todo } from '../reducers'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
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
          <TodoItem key={i} index={i} todo={todo}/>
        ))}
      </ul>
    )
  }
}

export default connect(mapStateToProps)(TodoList)
