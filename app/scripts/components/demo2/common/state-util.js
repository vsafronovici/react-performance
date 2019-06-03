import { clone, omit } from 'ramda'

export const NR_OF_INITIAL_ITEMS = 5
const DEEP_CLONE = false

export const getInitialItems = () => [...Array(NR_OF_INITIAL_ITEMS).keys()].reduce((acc, item, id) => ({
  ...acc,
  [id]: {
    id,
    name: `name_${id}`,
    count: 0
  }
}), {})

export const addItemBuilder = () => {
  let id = NR_OF_INITIAL_ITEMS - 1

  return function() {
    const newItems = {
      ...this.state.items,
      [++id]: {
        id,
        name: `name_${id}`,
        count: 0
      }
    }

    this.setState({
      items: DEEP_CLONE ? clone(newItems) : newItems
    })
  }
}

export function deleteItem(id) {
  return () => {
    const newItems = omit([id], { ...this.state.items })
    this.setState({
      items: DEEP_CLONE ? clone(newItems) : newItems
    })
  }
}

export function incrementCount(id) {
  return () => {
    const newItems = {
      ...this.state.items,
      [id]: {
        ...this.state.items[id],
        count: this.state.items[id].count + 1
      }
    }
    this.setState({
      items: DEEP_CLONE ? clone(newItems) : newItems
    })
  }
}

