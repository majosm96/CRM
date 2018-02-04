import { createStore, applyMiddleware, combineReducers } from 'redux' 
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'

import ClientReducer from './Client/ClientReducer'
import CompanyReducer from './Company/CompanyReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})

let reducer = combineReducers ({
  Client: ClientReducer,
  Company: CompanyReducer,
})

const store = createStore( reducer, composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    logger,
  ),
))

export default store