import { devnet, goerli, mainnet } from '@starknet-react/chains'
import {
	StarknetConfig,
	argent,
	braavos,
	publicProvider,
	useInjectedConnectors,
} from '@starknet-react/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import { BrowserRouter } from 'react-router-dom'

function Root({ children }: { children: React.ReactNode }) {
	const chains = [goerli, mainnet, devnet]
	const provider = publicProvider()
	const { connectors } = useInjectedConnectors({
		// Show these connectors if the user has no connector installed.
		recommended: [argent(), braavos()],
	})

	return (
		<StarknetConfig
			autoConnect
			chains={chains}
			provider={provider}
			connectors={connectors}
		>
			{children}
		</StarknetConfig>
	)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Root>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Root>
	</React.StrictMode>
)
