import React from 'react'

export class LoggedHeader extends React.Component {

  static id = 0

  constructor() {
    super()
    this.name = `${this.constructor.name} ${++LoggedHeader.id}`
    console.log(`${this.name} constructor`)
  }

  componentDidMount() {
    console.log(`${this.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.name} render`)
    return <h2>{this.name}</h2>
  }
}

export class Content extends React.Component {

  static id = 0

  constructor() {
    super()
    this.name = `${this.constructor.name} ${++Content.id}`
    console.log(`${this.name} constructor`)
  }

  componentWillMount() {
    console.log(`${this.name} componentWillMount`)
  }

  componentDidMount() {
    console.log(`${this.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.name} render`)
    return <h2>{this.name}</h2>
  }
}

export class LoggedFooter extends React.Component {
  static id = 0

  constructor() {
    super()
    this.name = `${this.constructor.name} ${++LoggedFooter.id}`
    console.log(`${this.name} constructor`)
  }

  componentDidMount() {
    console.log(`${this.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.name} render`)
    return <h2>{this.name}</h2>
  }
}


export class NotLoggedFooter extends React.Component {
  static id = 0

  constructor() {
    super()
    this.name = `${this.constructor.name} ${++NotLoggedFooter.id}`
    console.log(`${this.name} constructor`)
  }

  componentDidMount() {
    console.log(`${this.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.name} componentWillUnmount`)
  }

  render() {
    console.log(`${this.name} render`)
    return <h2>{this.name}</h2>
  }
}



