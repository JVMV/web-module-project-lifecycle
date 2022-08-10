import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        {
          task: 'test task',
          completed: false
        },
        {
          task: 'another task',
          completed: true
        }
      ]
    }
  }
  render() {
    return (
      <>
      <TodoList todoData={this.state.todoData}/>
      <Form />
      </>
    )
  }
}
