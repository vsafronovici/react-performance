import React from 'react'
import { values } from 'ramda'
import { BadTableItems } from './BadTableItems'
import { addItemBuilder, getInitialItems, deleteItem, incrementCount } from '../common/state-util'

export class BadTable extends React.Component {

  constructor() {
    super()
    this.addItem = addItemBuilder().bind(this)
    this.deleteItem = deleteItem.bind(this)
    this.incrementCount = incrementCount.bind(this)
  }

  state = {
    items: getInitialItems()
  }

  render() {
    // console.log(`${this.constructor.name} render`, this.state.items)

    return <div>
      <h2>Bad table example</h2>
      <div className="table">
        <BadTableItems items={values(this.state.items)} deleteItem={this.deleteItem} incrementCount={this.incrementCount}/>
      </div>
      <div>
        <button onClick={this.addItem}>add item</button>
      </div>
    </div>
  }
}

