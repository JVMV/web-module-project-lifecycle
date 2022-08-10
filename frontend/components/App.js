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
    const doneTask = this.state.todoData.filter(e => e.completed === true)

    // doneTask.forEach(e => {
    //   axios.delete(`http://localhost:9000/api/todos/${e.id}`)
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => console.log(err))
    // })
  }
  onChange = evt => {
    this.setState(() => ({newTodo: {"name": evt.target.value}}))
    // console.log(this.state.newTodo)
  }
  onComplete = todo => {
    axios.patch(`http://localhost:9000/api/todos/${todo.id}`)
    
    // this.setState(() => ({todoData}))
    // console.log(todo.completed)
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
    console.log(oldState, this.state)
    if(oldState.todoData !== this.state.todoData) {
      axios.get('http://localhost:9000/api/todos')
      .then(res => {
        this.setState(() => ({todoData: res.data.data}))
      })
      .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <>
      <TodoList todoData={this.state.todoData} onComplete={this.onComplete}/>
      <Form onSubmit={this.onSubmit} onClear={this.onClear} onChange={this.onChange} form={this.state.formInput}/>
      </>
    )
  }
}
