import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <p>{`${this.props.todo.task} || ${this.props.todo.completed === true ? 'done' : 'not finished'}`}</p>
      </>
    )
  }
}
