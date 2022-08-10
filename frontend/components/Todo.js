import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <p>{`${this.props.todo.name} || ${this.props.todo.completed === true ? 'done' : 'not finished'}`}</p>
      <button onClick= {evt => {this.props.onComplete(this.props.todo)}}>Finished</button>
      </>
    )
  }
}
