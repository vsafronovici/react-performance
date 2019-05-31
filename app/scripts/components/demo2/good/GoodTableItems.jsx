import React  from 'react'
import { GoodTableItem } from './GoodTableItem'
import { GoodTableItemPure } from './GoodTableItemPure'
import { withRed } from '../common/WithRed'
import { NR_OF_INITIAL_ITEMS } from '../common/state-util'

const RedTableItem = withRed(GoodTableItem)

export class GoodTableItems extends React.Component {

  constructor(props) {
    super(props)
    this.name = `${this.constructor.name}`
  }

  render() {
    console.log(`${this.name} render`, this.props)

    const { items, deleteItem, incrementCount } = this.props
    return items.map(it => {
      const Component = it.id < NR_OF_INITIAL_ITEMS ? GoodTableItem : RedTableItem
      // const Component = it.id < NR_OF_INITIAL_ITEMS ? GoodTableItemPure : RedTableItem
      return <Component item={it} deleteItem={deleteItem} incrementCount={incrementCount} key={it.id} />
      // return <Component id={it.id} name={it.name} count={it.count}  deleteItem={deleteItem} incrementCount={incrementCount} key={it.id} />
    })
  }
}

