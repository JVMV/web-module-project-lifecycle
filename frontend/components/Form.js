import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <form onSubmit={this.props.onSubmit}>
        <input type='text' placeholder='add a todo item' onChange={this.props.onChange} name='name'/>
        <button>Add</button><br />
      </form>
      <button onClick={this.props.onClear}>Clear Complete</button>
      </>
    )
  }
}
