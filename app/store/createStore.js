import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'


const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default (initialState = {}) => {
    const store = createStoreWithMiddleware(
        rootReducer,
        initialState
    );
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const reducers = require('../reducers')
            store.replaceReducer(reducers)
        })
    }
    return store
}
