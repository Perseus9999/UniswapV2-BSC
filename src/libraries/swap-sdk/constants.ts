import { ChainId } from 'config/chains'
import { Percent } from 'libraries/swap-sdk-core'
import { ERC20Token } from './entities/token'

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// export const FACTORY_ADDRESS = '0x6725F303b657a9451d8BA641348b6761A6CC7a17'

export const FACTORY_ADDRESS: Record<number, `0x${string}`> = {
  [ChainId.MAINNET]: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
  [ChainId.TESTNET]: '0x7E0987E5b3a30e3f2828572Bb659A548460a3003',
}
// export const INIT_CODE_HASH = '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66'

export const INIT_CODE_HASH_MAP: Record<number, `0x${string}`> = {
  [ChainId.MAINNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.TESTNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
}

export const WETH9 = {
  [ChainId.MAINNET]: new ERC20Token(
    ChainId.MAINNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://bsc-testnet-rpc.publicnode.com'
  ),
  [ChainId.TESTNET]: new ERC20Token(
    ChainId.TESTNET,
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    18,
    'WETH',
    'Wrapped ETH',
    'https://ethereum-sepolia-rpc.publicnode.com'
  ),
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.MAINNET]: WETH9[ChainId.MAINNET],
  [ChainId.TESTNET]: WETH9[ChainId.TESTNET],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.MAINNET]: { name: 'Test BNB', symbol: 'tBNB', decimals: 18 },
  [ChainId.TESTNET]: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
}
