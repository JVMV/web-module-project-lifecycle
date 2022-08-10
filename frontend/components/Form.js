import React from 'react'

export default class Form extends React.Component {
  onSubmit = event => {
    event.preventDefault()
  }
  render() {
    return (
      <form>
        <input type='text' placeholder='add a todo item' />
        <button onClick={this.onSubmit}>Add</button><br />
        <button onClick={this.onSubmit}>Clear Complete</button>
      </form>
    )
  }
}
