import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
	allowedUsers: Array<string>
}

function ProtectedRoute({ allowedUsers }: ProtectedRouteProps) {
	const isAuthenticated = localStorage.getItem('user_address') ? true : false
	const userType = localStorage.getItem('user_type') || ''

	return allowedUsers.includes(userType) ? (
		<Outlet />
	) : isAuthenticated ? (
		<Navigate to="/unauthorised" />
	) : (
		<Navigate to="/" />
	)
}
export default ProtectedRoute
