import { REHYDRATE } from 'redux-persist/lib/constants'
import { createReducer } from './../modules/helpers'

export const initialState = {}

export default {
  app: createReducer(initialState, {
    [REHYDRATE](state) {
      return initialState
    },
  })
}
