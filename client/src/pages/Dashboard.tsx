import React from 'react'
// import { useAccount, useBalance } from '@starknet-react/core'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
	// const { address } = useAccount()
	const navigate = useNavigate()
	// const { isLoading, isError, error, data } = useBalance({
	// 	address,
	// 	watch: false,
	// })

	// if (isLoading) return <div>Loading ...</div>
	// if (isError || !data) return <div>{error?.message}</div>

	const buttonRoute =
		localStorage.getItem('user_type') === 'client'
			? '/marketplace/client'
			: '/marketplace/ba'

	return (
		<div>
			<div
				className="fixed top-0 left-0 left-0 justify-between flex flex-row px-4 p-2"
				style={{
					fontSize: 50,
					fontWeight: 'bold',
				}}
			>
				<h1>User Dashboard</h1>
			</div>

			<img
				style={{
					borderRadius: '50%',
					width: 200,
					height: 200,
					left: 0,
					position: 'absolute',
					margin: 50,
					top: 125,
					display: 'block',
					backgroundPosition: 'center',
					backgroundSize: 'auto 80px',
				}}
				src="../../public/Avatar.jpg"
			/>

			<div>
				<div
					className="fixed left-0 left-0 justify-between flex flex-row px-4 p-2"
					style={{
						marginTop: 100,
					}}
				>
					<h1>
						Wallet Address: {localStorage.getItem('user_address')}
					</h1>
				</div>

				<br></br>

				<div
					className="fixed left-0 left-0 justify-between flex flex-row px-4 p-2"
					style={{
						marginTop: 100,
					}}
				>
					<h1>User Type: {localStorage.getItem('user_type')}</h1>
				</div>

				<br></br>

				{/* <div
					className="fixed left-0 left-0 justify-between flex flex-row px-4 p-2"
					style={{
						marginTop: 100,
					}}
				>
					<h1>
						User Balance: {data.value.toString()} {}
						{data.symbol}
					</h1>
				</div> */}

				<>
					<a>
						<Button
							onClick={() => navigate(buttonRoute)}
							style={{
								left: 0,
								position: 'absolute',
								margin: 10,
								bottom: 100,
							}}
						>
							Marketplace
						</Button>
					</a>
				</>
			</div>
		</div>
	)
}
