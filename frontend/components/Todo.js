import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <p>{`${this.props.todo[0].task}`}</p>
      {/* {console.log(this.props.todo[0])} */}
      </>
    )
  }
}
