import memoize from 'lodash/memoize'
import { Address } from 'viem'

import { Chain } from 'wagmi/chains'

export const bitfinity = {
  blockExplorers: {
    default: {
      apiUrl: "https://api-testnet.bscscan.com/api",  // BSC Testnet API
      name: "BscScan Testnet",                       // Explorer name
      url: "https://testnet.bscscan.com",            // BSC Testnet Explorer URL
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11" as Address,
      blockCreated: 14353601,
    },
  },
  fees: undefined,
  formatters: undefined,
  id: 97,
  name: "Test Binance Smart chain",
  nativeCurrency: {
    name: "Testnet BNB",
    symbol: "tBNB",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        "https://bsc-testnet-rpc.publicnode.com",
      ]
    }
  },
  serializers: undefined,
}

export const EthereumTestnet = {
  blockExplorers: {
    default: {
      apiUrl: "https://api-sepolia.etherscan.io/api",
      name: "Etherscan Sepolia",
      url: "https://sepolia.etherscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11" as Address,
      blockCreated: 14353601,
    },
  },
  fees: undefined,
  formatters: undefined,
  id: 11155111,
  name: "Ethereum Testnet",
  nativeCurrency: {
    name: "SepoliaETH",
    symbol: "SepoliaETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        "https://ethereum-sepolia-rpc.publicnode.com",
      ]
    }
  },
  serializers: undefined,
}

export enum ChainId {
  MAINNET = 97,
  TESTNET = 11155111,
}

export const CHAIN_QUERY_NAME: Record<ChainId, string> = {
  [ChainId.MAINNET]: 'mainnet',
  [ChainId.TESTNET]: 'testnet',
}

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

export const CHAINS: [Chain, ...Chain[]] = [
  bitfinity,
  // EthereumTestnet,
]

export const PUBLIC_NODES: Record<ChainId, string[] | readonly string[]> = {
  [ChainId.MAINNET]: [
    ...bitfinity.rpcUrls.default.http,
  ],
  [ChainId.TESTNET]: [
    ...EthereumTestnet.rpcUrls.default.http,
  ],
}

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined
})