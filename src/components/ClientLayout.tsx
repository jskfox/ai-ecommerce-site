'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Logo from '@/components/Logo';
import { NextIntlClientProvider, useTranslations } from 'next-intl';

function CartLink() {
  const { state } = useCart();
  
  return (
    <Link href="/carrito" className="relative" id="cart-icon">
      <span className="text-lg">🛒</span>
      {state.itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {state.itemCount}
        </span>
      )}
    </Link>
  );
}

interface LanguageSwitcherProps {
  locale: string;
  onLocaleChange: (newLocale: string) => void;
}

function LanguageSwitcher({ locale, onLocaleChange }: LanguageSwitcherProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLocaleChange(e.target.value);
  };

  return (
    <select 
      value={locale} 
      onChange={handleChange} 
      className="appearance-none bg-transparent border-none text-xl cursor-pointer focus:outline-none"
    >
      <option value="en">🇺🇸</option>
      <option value="es">🇲🇽</option>
    </select>
  );
}

interface HeaderProps {
  locale: string;
  onLocaleChange: (newLocale: string) => void;
}

function Header({ locale, onLocaleChange }: HeaderProps) {
  const t = useTranslations();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Logo className="h-12" />
          <nav className="space-x-6">
            <Link href="/" className="hover:text-primary">
              {t('welcome')}
            </Link>
            <Link href="/productos" className="hover:text-primary">
              {t('products.title')}
            </Link>
            <Link href="/categorias" className="hover:text-primary">
              {t('categories.title')}
            </Link>
            <LanguageSwitcher locale={locale} onLocaleChange={onLocaleChange} />
            <CartLink />
          </nav>
        </div>
      </div>
    </header>
  );
}

function TranslatedFooter() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">{t('footer.aboutUs.title')}</h3>
            <p className="text-gray-600">
              {t('footer.aboutUs.text')}
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-gray-600 hover:text-blue-600">
                  {t('products.title')}
                </Link>
              </li>
              <li>
                <Link href="/carrito" className="text-gray-600 hover:text-blue-600">
                  {t('cart.title')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t('footer.contact.title')}</h3>
            <p className="text-gray-600">
              {t('footer.contact.email')}: info@digilap.com<br />
              {t('footer.contact.phone')}: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState('en');

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <NextIntlClientProvider locale={locale} messages={require(`../../messages/${locale}.json`)} timeZone="America/Los_Angeles">
      <div className="min-h-screen flex flex-col">
        <Header locale={locale} onLocaleChange={handleLocaleChange} />
        <main className="flex-grow container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
        <TranslatedFooter />
      </div>
    </NextIntlClientProvider>
  );
}
