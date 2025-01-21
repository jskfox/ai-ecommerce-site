import {getRequestConfig} from 'next-intl/server';
import {locales} from '../i18n';
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) {
    throw new Error(`Locale '${locale}' not supported`);
  }
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
