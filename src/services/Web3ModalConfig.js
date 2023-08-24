import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

// Consider moving sensitive data like projectId to environment variables
const projectId = process.env.REACT_APP_PROJECT_ID || '3dd60652fc7a9a7934ec143211b92364';

const chains = [arbitrum, mainnet, polygon];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export { wagmiConfig, ethereumClient, projectId };