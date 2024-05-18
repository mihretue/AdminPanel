import ChartPieIcon from "@heroicons/react/24/solid/ChartPieIcon"
import CogIcon from "@heroicons/react/24/solid/CogIcon"
import DocumentTextIcon from "@heroicons/react/24/solid/DocumentTextIcon"
import ExclamationTriangleIcon from "@heroicons/react/24/solid/ExclamationTriangleIcon"
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon"
import StarIcon from "@heroicons/react/24/solid/StarIcon"
import { SvgIcon } from '@mui/material';
import {PlusCircleIcon} from "@heroicons/react/24/outline"
export const items = [
  {
    href: '/',
    icon: (
      <SvgIcon>
        <ChartPieIcon />
      </SvgIcon>
    ),
    label: 'Home'
  },
  {
    href: '/orders',
    icon: (
      <SvgIcon>
        <ShoppingCartIcon />
      </SvgIcon>
    ),
    label: 'Orders'
  },
  {
    href: '/settings',
    icon: (
      <SvgIcon>
        <PlusCircleIcon className="h-6 w-d text-gray" />
      </SvgIcon>
    ),
    label: 'Register'
  },
  {
    href: '/theme',
    icon: (
      <SvgIcon>
        <DocumentTextIcon />
      </SvgIcon>
    ),
    label: 'Theme'
  },
  {
    href: '/icons',
    icon: (
      <SvgIcon>
        <StarIcon />
      </SvgIcon>
    ),
    label: 'Icons'
  },
  {
    href: '/404',
    icon: (
      <SvgIcon>
        <ExclamationTriangleIcon />
      </SvgIcon>
    ),
    label: 'Error'
  }
];
