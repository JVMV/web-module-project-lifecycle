import React from 'react'
import Todo from './Todo'
export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      {/* {this.todoData.forEach(todo => <Todo todo={todo}/>)} */}
      <Todo todo={this.props.todoData} />
      </>
    )
  }
}
