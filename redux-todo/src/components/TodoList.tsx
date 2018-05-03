import React from 'react'
import { connect } from 'react-redux'

import { ActionType, toggleTodo } from '../actions'
import { AppState, Todo } from '../reducers'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
  onTodoItemClick (index: number): void
}

function mapStateToProps (state: AppState): Partial<Props> {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps (dispatch: (action: ActionType) => void): Partial<Props> {
  return {
    onTodoItemClick: (index: number) => {
      dispatch(toggleTodo(index))
    }
  }
}

class TodoList extends React.PureComponent<Props> {
  render () {
    const {
      todos,
      onTodoItemClick
    } = this.props
    return (
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} onClick={() => onTodoItemClick(i)}/>
        ))}
      </ul>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
