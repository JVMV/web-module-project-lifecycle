import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'
const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/todos', this.state.newTodo)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err.message))
  }
  onClear = evt => {
    evt.preventDefault()
  }
  onChange = evt => {
    this.setState(() => ({newTodo: {name: evt.target.value}}))
    console.log(this.state.newTodo)
  }
  constructor(props) {
    super(props)
    this.state = {
      todoData: [],
      newTodo: {name: ''}
    }
  }

  componentDidMount() {
    console.log('<App> mounted')
    axios.get('http://localhost:9000/api/todos')
      .then(res => {
        this.setState(() => ({todoData: res.data.data}))
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    // console.log('<App> updated')
  }

  render() {
    return (
      <>
      <TodoList todoData={this.state.todoData}/>
      <Form onSubmit={this.onSubmit} onClear={this.onClear} onChange={this.onChange}/>
      </>
    )
  }
}
