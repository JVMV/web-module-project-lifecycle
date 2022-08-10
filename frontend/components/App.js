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
      this.setState(() => ({newTodo: {"name": ""}}))
      axios.get('http://localhost:9000/api/todos')
      .then(res => {
        this.setState(() => ({todoData: res.data.data}))
      })
      .catch(err => console.log(err))
  }
  onClear = evt => {
    evt.preventDefault()
    console.log(this.state.todoData.filter(e => e.completed === true))
  }
  onChange = evt => {
    this.setState(() => ({newTodo: {"name": evt.target.value}}))
    console.log(this.state.newTodo)
  }
  onComplete = evt => {
    // axios.patch(`http://localhost:9000/api/todos/${null}`)
    console.log('test')
  }
  constructor(props) {
    super(props)
    this.state = {
      todoData: [],
      newTodo: {"name": ""},
      formInput: ""
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

  componentWillUnmount() {
    console.log('<App> unmount')
  }

  componentDidUpdate(oldProps, oldState) {
    console.log('<App> updated')
    // axios.get('http://localhost:9000/api/todos')
    //   .then(res => {
    //     this.setState(() => ({todoData: res.data.data}))
    //   })
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      <>
      <TodoList todoData={this.state.todoData}/>
      <Form onSubmit={this.onSubmit} onClear={this.onClear} onChange={this.onChange} form={this.state.formInput}/>
      </>
    )
  }
}
