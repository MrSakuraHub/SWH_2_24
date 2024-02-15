'use client'
import { Connector, useConnect } from '@starknet-react/core'
import React from 'react'
import { Button } from '../ui/Button'
import Dialog from '../ui/Dialog'

export default function ConnectModal() {
	const { connect, connectors } = useConnect()

	return (
		<Dialog title="Connect Wallet">
			<div className="flex flex-col gap-2">
				{connectors.map((connector: Connector) => {
					const message =
						connector.name === 'Braavos' ? 'For Clients' : 'For BA'

					return (
						<Button
							key={connector.id}
							onClick={async () => {
								connector.available()
									? connect({ connector })
									: null

								const userType =
									connector.name === 'Braavos'
										? 'client'
										: 'ba'
								localStorage.setItem('user_type', userType)
							}}
							disabled={!connector.available()}
							className="flex flex-row items-center justify-start gap-4 w-96"
						>
							{connector.icon.light && (
								<img
									src={connector.icon.dark}
									className="w-10 h-10"
								/>
							)}

							<p className="">
								Connect {connector.name} {message}
							</p>
						</Button>
					)
				})}
			</div>
		</Dialog>
	)
}
