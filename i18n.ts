import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['es'] as const;
export const defaultLocale = 'es' as const;
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
