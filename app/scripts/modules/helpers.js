/**
 * Helper functions
 * @module Helpers
 */

/**
 * Generate reducer.
 *
 * @param {Object} initialState
 * @param {Object} handlers
 * @returns {function}
 */

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}

