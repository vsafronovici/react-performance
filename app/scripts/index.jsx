// Polyfills
import 'core-js/shim'
import 'isomorphic-fetch'
import 'classlist-polyfill'
import 'vendor/polyfills'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { PersistGate } from 'redux-persist/lib/integration/react'

import { showAlert } from './actions/app-action'
import { store, persistor } from './store'
import { Application } from './containers/Application'

import '../styles/main.scss'

const isProd = process.env.NODE_ENV === 'production'

export const init = {
  cssRetries: 0,
  fetchRetries: 0,

  run() {
    /* istanbul ignore else */
    if (!isProd) {
      this.render()
      return Promise.resolve()
    }

    this.initOfflinePlugin()

    /* istanbul ignore next */
    return Promise
      .all([this.loadCSS()])
      .then(() => this.render())
      .catch(reason => {
        if (this.fetchRetries < 3) {
          this.fetchRetries++
          this.run()
        }
      })
  },
  loadCSS() {
    /* istanbul ignore next */
    return new Promise(resolve => {
      this.retryCSS = () => {
        if (this.isCSSLoaded() || this.cssRetries > 2) {
          resolve()
        } else {
          this.cssRetries++
          setTimeout(() => {
            this.retryCSS()
          }, this.cssRetries * 500)
        }
      }

      this.retryCSS()
    })
  },
  initOfflinePlugin() {
    const OfflinePlugin = require('offline-plugin/runtime')

    /* istanbul ignore next */
    OfflinePlugin.install({
      onUpdateReady: () => {
        OfflinePlugin.applyUpdate()
      },
      onUpdated: () => {
        store.dispatch(showAlert((
          <div className="app__cache-reload">
            <p>There's a new version of this app!</p>
            <button className="btn btn-sm btn-outline-primary" onClick={() => window.location.reload()}>
              Reload
            </button>
          </div>
        ), { id: 'sw-update', type: 'primary', icon: 'i-flash', timeout: 0 }))
      }
    })
  },
  isCSSLoaded() {
    const styles = document.styleSheets

    /* istanbul ignore next */
    try {
      for (let i = 0; i < styles.length; i++) {
        if (styles[i].href && styles[i].href.match('app.*.css')) {
          if (styles[i].cssRules !== null && styles[i].cssRules.length > 0) {
            return true
          }
        }
      }
    } catch (e) {
      // error
    }

    return false
  },
  render() {
    /* istanbul ignore next */
      ReactDOM.render(
        <div>
          <AppContainer>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <Application />
              </PersistGate>
            </Provider>
          </AppContainer>
        </div>,
        document.getElementById('app')
      )
  }
}

init.run()

/* istanbul ignore next  */
if (module.hot) {
  module.hot.accept(
    'containers/Application',
    () => init.render()
  )
}
