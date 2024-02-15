import React from 'react'
import { useAccount, useBalance } from '@starknet-react/core'

export default function Dashboard() {
	const { address } = useAccount()
	const { isLoading, isError, error, data } = useBalance({
		address,
		watch: false,
	})

	if (isLoading) return <div>Loading ...</div>
	if (isError || !data) return <div>{error?.message}</div>

	return (
		<div>
			<div className="fixed top-0 left-0 left-0 justify-between  flex flex-row px-4 p-2">
				<h1>Dashboard</h1>
			</div>

			<div className="fixed left-0 left-0 justify-between flex flex-row px-4 p-2">
				<h1>Wallet Address: {localStorage.getItem('user_address')}</h1>
			</div>

			<br></br>

			<div className="fixed left-0 left-0 justify-between flex flex-row px-4 p-2">
				<h1>User Type: {localStorage.getItem('user_type')}</h1>
			</div>

			<br></br>

			<div className="fixed left-0 left-0 justify-between flex flex-row px-4 p-2">
				<h1>
					User Balance: {data.value.toString()} {}
					{data.symbol}
				</h1>
			</div>
		</div>
	)
}
