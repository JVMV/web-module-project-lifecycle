import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <p onClick={this.props.todo.onComplete}>{`${this.props.todo.name} || ${this.props.todo.completed === true ? 'done' : 'not finished'}`}</p>
      </>
    )
  }
}
