import React from 'react'
import ReactDOM from 'react-dom'
import routes from '../../app/routes'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import createStore from '../../app/store/createStore'

const store = createStore(window.__REDUX_STATE__)
const MOUNTNODE = document.querySelector('.react-container')

ReactDOM.render(<Provider store = { store }>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
    MOUNTNODE
)
