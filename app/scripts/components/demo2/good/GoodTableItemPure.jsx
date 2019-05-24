import React from 'react'
import shallowEqual from 'shallow-equal/objects/'

export class GoodTableItemPure extends React.PureComponent {

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
    // console.log(`${this.name} componentWillReceiveProps: ${this.props.item === nextProps.item}`)
  }


  render() {
    console.log(`${this.name} render`, this.props)

    const { item: { id, name, count }, deleteItem, incrementCount } = this.props

    return <div className="table-raw">
      <div className="table-cell">{id}</div>
      <div className="table-cell">{name}</div>
      <div className="table-cell">
        {count} <button onClick={incrementCount(id)}>increment</button>
      </div>
      <div className="table-cell">
        <button onClick={deleteItem(id)}>delete</button>
      </div>
    </div>
  }
}


