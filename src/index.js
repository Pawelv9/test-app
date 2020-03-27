import React from 'react'
import App from './App'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import quotesMiddleWare from './middleware/quotesMiddleware'
import rootReducer from './reducers/rootReducer'

import './index.css'

const middleware = applyMiddleware(quotesMiddleWare)

const store = createStore(
    rootReducer,
    composeWithDevTools(middleware),
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)