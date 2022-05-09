import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Search from './pages/Search'

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Search} path="/" exact />
		</BrowserRouter>
	)
}

export default Routes