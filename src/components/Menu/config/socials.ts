import { MenuItemsType, DropdownMenuItemType } from 'widgets/Menu'
import { DropdownMenuItems } from 'components/DropdownMenu'
import {
  MoreIcon
} from '../../Svg'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}
 
const config: (
  chainId?: number,
) => ConfigMenuItemsType[] = (chainId) =>
  [
    {
      label: '',
      icon: MoreIcon,
      fillIcon: MoreIcon,
      href: '',
      showItemsOnMobile: true,
      items: [
        {
          label: 'Twitter',
          href: 'https://x.com/xdexfinity',
          type: DropdownMenuItemType.EXTERNAL_LINK
        },
        {
          label: 'Telegram',
          href: 'https://t.me/DexfinityFinance',
          type: DropdownMenuItemType.EXTERNAL_LINK
        },
        {
          label: 'Discord',
          href: 'https://discord.gg/ySugAwJD7D',
          type: DropdownMenuItemType.EXTERNAL_LINK
        },
        {
          label: 'Docs',
          href: 'https://docs.dexfinity.finance/',
          type: DropdownMenuItemType.EXTERNAL_LINK
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
