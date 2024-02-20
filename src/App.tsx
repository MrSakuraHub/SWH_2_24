import React from 'react'
// import { useBlock } from "@starknet-react/core";
import { Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ClientMarketplace from './pages/ClientMarketplace'
import Header from './components/Header'
import ProtectedRoute from './ProtectedRoute'
import BAMarketplace from './pages/BAMarketplace'
import Unauthorised from './pages/Unauthorised'

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
				<Route
					element={<ProtectedRoute allowedUsers={['ba', 'client']} />}
				>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>

				<Route element={<ProtectedRoute allowedUsers={['client']} />}>
					<Route
						path="/marketplace/client"
						element={<ClientMarketplace />}
					/>
				</Route>

				<Route element={<ProtectedRoute allowedUsers={['ba']} />}>
					<Route path="/marketplace/ba" element={<BAMarketplace />} />
				</Route>
			</Route>

			<Route path="/unauthorised" element={<Unauthorised />} />
		</Routes>
	)
}

export default App
