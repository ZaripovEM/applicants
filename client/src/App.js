import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import useRoutes from './routes'

const App = () => {
	const routes = useRoutes(true)
	return (
		<>
			<Router>
				<Header />
				<div>{routes}</div>
			</Router>
		</>
	)
}

export default App
