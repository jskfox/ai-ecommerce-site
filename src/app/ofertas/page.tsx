import React from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const Ofertas: React.FC = () => {
  setRequestLocale('es');
  const t = useTranslations('offers');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Ofertas;
