import React from 'react'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

export default function BAMarketplace() {
	const navigate = useNavigate()

	const dummyTaskList = [
		{
			title: 'Archive Task',
			description: 'How to render list in React?',
			status: 'Solving',
			key: 1,
		},
		{
			title: 'Archive Task',
			description: 'Do you like JS?',
			status: 'Negotating',
			key: 2,
		},
		{
			title: 'Archive Task',
			description: 'Do you know CSS?',
			status: 'Solving',
			key: 3,
		},
	]

	return (
		<div>
			<div
				className="fixed top-0 left-0 left-0 justify-between flex flex-row px-4 p-2"
				style={{
					fontSize: 50,
					fontWeight: 'bold',
				}}
			>
				BA Marketplace
			</div>

			<div style={{ position: 'absolute', left: 0, top: 100 }}>
				{dummyTaskList.map((item) => (
					<Button
						key={item.key}
						style={{
							backgroundColor: '#aaa',
							margin: '1rem',
							padding: '1rem',
						}}
						onClick={() => navigate('/modal')}
					>
						<h3>
							{item.title} - {item.key} ({item.status})
						</h3>
					</Button>
				))}
			</div>
		</div>
	)
}
