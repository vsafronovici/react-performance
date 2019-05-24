import React from 'react'
import { keys } from 'ramda'

export class Increment extends React.Component {

  constructor(props) {
    super(props)
    this.name = `${this.constructor.name} ${props.id}`
  }

  componentDidMount() {
    console.log(`${this.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.name} componentWillUnmount`)
  }

  componentWillReceiveProps(nextProps){
    // console.log(`${this.name} componentWillReceiveProps: ${this.props.item === nextProps.item}`)
  }

  render() {
    console.log(`${this.name} render`, this.props)

    const { id, count, incrementCount } = this.props

    return <span>
      {count} <button onClick={incrementCount(id)}>increment</button>
    </span>
  }
}



