import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'
const sagaMid = createSagaMiddleware()



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMid))

const store = createStore(
  reducers,
  enhancer
  )
  sagaMid.run(mySagas)
export default store