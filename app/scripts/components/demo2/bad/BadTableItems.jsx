import React from 'react'
import { BadTableItem } from './BadTableItem'
import { withRed } from '../common/WithRed'
import { NR_OF_INITIAL_ITEMS } from '../common/state-util'

const RedTableItem = withRed(BadTableItem)

export class BadTableItems extends React.Component {

  veryBadRendering() {
    const RedTableItem = withRed(BadTableItem)
    const { items, deleteItem, incrementCount } = this.props
    return items.map(it => {
      const Component = it.id < NR_OF_INITIAL_ITEMS ? BadTableItem : RedTableItem
      return <Component item={it} deleteItem={deleteItem} incrementCount={incrementCount} />
    })
  }

  badRendering() {
    const { items, deleteItem, incrementCount } = this.props
    return items.map(it => {
      const Component = it.id < NR_OF_INITIAL_ITEMS ? BadTableItem : RedTableItem
      return <Component item={it} deleteItem={deleteItem} incrementCount={incrementCount} />
    })
  }

  betterRendering() {
    const { items, deleteItem, incrementCount } = this.props
    return items.map(it => {
      const Component = it.id < NR_OF_INITIAL_ITEMS ? BadTableItem : RedTableItem
      return <Component item={it} deleteItem={deleteItem} incrementCount={incrementCount} key={it.id} />
    })
  }

  render() {
    // console.log(`${this.constructor.name} render`, this.props)
    // return this.veryBadRendering()
    // return this.badRendering()
    return this.betterRendering()
  }
}

