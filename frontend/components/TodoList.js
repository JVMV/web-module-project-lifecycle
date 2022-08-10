import React from 'react'
import Todo from './Todo'
export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      {this.props.todoData.map(todo => <Todo todo={todo} onComplete={this.props.onComplete}/>)}
      </>
    )
  }
}
