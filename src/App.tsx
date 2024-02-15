import React from 'react'
// import { useBlock } from "@starknet-react/core";
import { Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<main className=" flex flex-col items-center justify-center min-h-screen gap-12">
						<Header />
						<Outlet />
					</main>
				}
			>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	)
}

export default App
