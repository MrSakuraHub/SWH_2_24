import React from 'react'
import '../globals.css'

export default function ClientMarketplace() {
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
				Client Marketplace
			</div>

			<div className="flex-container">
				<div className="flex-child magenta">
					{dummyTaskList.map((item) => (
						<button
							key={item.key}
							style={{
								backgroundColor: '#eee',
								margin: '1rem',
								padding: '1rem',
								minWidth: '90%',
							}}
						>
							<h3>
								{item.title} - {item.key} ({item.status})
							</h3>
							<p>{item.description}</p>
						</button>
					))}
				</div>

				<div className="flex-child green">
					{dummyBAList.map((item) => (
						<button
							key={item.key}
							style={{
								backgroundColor: '#aaa',
								margin: '1rem',
								padding: '1rem',
								display: 'block',
								minWidth: '90%',
							}}
						>
							<h3>
								{item.title} - {item.key}
							</h3>
						</button>
					))}
				</div>
			</div>

			{/* <div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{dummyTaskList.map((item) => (
						<>
							<h3>
								{item.title} - {item.key} ({item.status})
							</h3>
							<p>{item.description}</p>
						</>
					))}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{dummyBAList.map((item) => (
						<h3 key={item.key}>
							{item.title} - {item.key}
						</h3>
					))}
				</div>
			</div> */}
		</div>
	)
}
