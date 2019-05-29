import React from 'react'
import shallowEqual from 'shallow-equal/objects/'
import { Increment } from '../common/Increment'

export class GoodTableItem extends React.Component {

  constructor(props) {
    super(props)
    this.name = `${this.constructor.name} ${props.item.id}`
  }

  componentDidMount() {
    console.log(`${this.name} componentDidMount`)
  }

  componentWillUnmount() {
    console.log(`${this.name} componentWillUnmount`)
  }

  componentWillReceiveProps(nextProps){
    console.log(`${this.name} componentWillReceiveProps: ${this.props.item === nextProps.item}`)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { props, state } = this
  //   // console.log(`${this.name} shouldComponentUpdate: props=${shallowEqual(props, nextProps)}; state=${shallowEqual(state, nextState)}`)
  //   return !shallowEqual(props, nextProps) || !shallowEqual(state, nextState)
  // }

  render() {
    console.log(`${this.name} render`, this.props)

    const { item: { id, name, count }, deleteItem, incrementCount } = this.props

    return <div className="table-raw">
      <div className="table-cell">{id}</div>
      <div className="table-cell">{name}</div>
      <div className="table-cell">
        <Increment id={id} count={count} incrementCount={incrementCount} />
      </div>
      <div className="table-cell">
        <button onClick={deleteItem(id)}>delete</button>
      </div>
    </div>
  }
}


