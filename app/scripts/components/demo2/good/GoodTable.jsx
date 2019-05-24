import React from 'react'
import { values } from 'ramda'
import { GoodTableItems } from './GoodTableItems'
import { addItemBuilder, deleteItem, getInitialItems, incrementCount } from '../common/state-util'


export class GoodTable extends React.Component {

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
    return <div>
      <h2>Good table example</h2>
      <div className="table">
        <GoodTableItems items={values(this.state.items)} deleteItem={this.deleteItem} incrementCount={this.incrementCount}/>
      </div>
      <div>
        <button onClick={this.addItem}>add item</button>
      </div>
    </div>
  }
}

