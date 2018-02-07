import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Beers from '../beer/beers'
import About from '../about/about'

export default props => (
	<Router history={hashHistory}>
		<Route path='/beers' component={Beers} />
		<Route path='/about/:id' component={About} />
		<Redirect from='*' to='/beers' />
	</Router>
)
