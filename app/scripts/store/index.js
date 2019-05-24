import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer as formReducer } from 'redux-form'

import rootSaga from 'sagas'
import rootReducer from 'reducers'

const sagaMiddleware = createSagaMiddleware()

const reducer = persistReducer(
  {
    key: 'rrsb', // key is required
    storage, // storage is now required
    whitelist: [] // local storage
  },
  combineReducers({
    ...rootReducer,
    form: formReducer
  })
)

const middleware = [
  sagaMiddleware
]

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  // middleware.push(createLogger({ collapsed: true }))
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore)

  const store = createStoreWithMiddleware(reducer, initialState)

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(require('reducers').default)
    })
  }

  return {
    persistor: persistStore(store),
    store
  }
}

const { store, persistor } = configStore()


export { store, persistor }
