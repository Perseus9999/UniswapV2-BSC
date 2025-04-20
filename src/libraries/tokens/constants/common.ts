import { ChainId } from 'config/chains'
import { ERC20Token } from 'libraries/swap-sdk'

export const GTOKEN_ARB = new ERC20Token(
  ChainId.MAINNET,
  '0xA200De431b63F91b21b4D672Db766D044Af7905D',
  18,
  'DEF',
  'Dexfinity Token',
  'https://dexfinity.finance/',
)

export const USDC_ARB = new ERC20Token(
  ChainId.MAINNET,
  '0x249DA603ebA64F7478766bfc07f12EBBbe68Ce2f',
  6,
  'USDC',
  'USD Coin',
)

export const USDT_ARB = new ERC20Token(
  ChainId.MAINNET,
  '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const DAI_ARB = new ERC20Token(
  ChainId.MAINNET,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai Stablecoin',
  'https://makerdao.com/',
)

export const WBTC_ARB = new ERC20Token(
  ChainId.MAINNET,
  '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const GTOKEN = {
  [ChainId.MAINNET]: GTOKEN_ARB,
  [ChainId.TESTNET]: GTOKEN_ARB,
}

export const USDC = {
  [ChainId.MAINNET]: USDC_ARB,
}

export const USDT = {
  [ChainId.MAINNET]: USDT_ARB,
}

export const DAI = {
  [ChainId.MAINNET]: DAI_ARB,
}
