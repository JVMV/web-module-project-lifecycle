import React from 'react'
import Form from './Form'
import Todo from './Todo'
import TodoList from './TodoList'
const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  render() {
    return (
      <Form />
    )
  }
}
