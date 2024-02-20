import React from 'react'
import { Button } from '../components/ui/Button'

export default function BAMarketplace() {
	const dummyBAList = [
		{
			title: 'Business Analyst',
			key: 1,
		},
		{ title: 'Business Analyst', key: 2 },
		{ title: 'Business Analyst', key: 3 },
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
				{dummyBAList.map((item) => (
					<Button
						key={item.key}
						style={{
							backgroundColor: '#aaa',
							margin: '1rem',
							padding: '1rem',
						}}
					>
						<h3>
							{item.title} - {item.key}
						</h3>
					</Button>
				))}
			</div>
		</div>
	)
}
