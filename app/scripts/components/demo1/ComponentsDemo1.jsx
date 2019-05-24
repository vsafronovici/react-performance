import React from 'react'

export class LoggedHeader extends React.Component {

  constructor() {
    super()
    console.log(`${this.constructor.name} constructor`)
  }

  componentDidMount() {
    console.log(`${this.constructor.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.constructor.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.constructor.name} render`)
    return <h2>{this.constructor.name}</h2>
  }
}

export class Content extends React.Component {

  componentDidMount() {
    console.log(`${this.constructor.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.constructor.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.constructor.name} render`)
    return <h2>{this.constructor.name}</h2>
  }
}

export class LoggedFooter extends React.Component {

  componentDidMount() {
    console.log(`${this.constructor.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.constructor.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.constructor.name} render`)
    return <h2>{this.constructor.name}</h2>
  }
}


export class NotLoggedFooter extends React.Component {

  componentDidMount() {
    console.log(`${this.constructor.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.constructor.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.constructor.name} render`)
    return <h2>{this.constructor.name}</h2>
  }
}



