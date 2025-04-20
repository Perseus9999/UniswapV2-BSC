import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Dexfinity',
  defaultTitle: 'Dexfinity',
  description:
    'Discover Dexfinity, the leading DEX on Bitfinity Network with the best rewarding in DeFi.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@xdexfinity',
    site: '@xdexfinity',
  },
  openGraph: {
    title: 'Dexfinity - A next evolution DeFi exchange on Bitfinity Network',
    description:
      'The most popular AMM on Bitfinity Network! Earn DEF through yield farming, then stake it in Pools to earn more tokens!',
    images: [{ url: 'https://dexfinity.finance/logo.png' }],
  },
}
