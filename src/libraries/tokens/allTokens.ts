import { ChainId } from 'config/chains'

import { mainnetTokens, testnetTokens } from './constants/bitfinity'

export const allTokens = {
  [ChainId.MAINNET]: mainnetTokens,
  [ChainId.TESTNET]: testnetTokens,
}
