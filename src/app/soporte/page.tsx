import React from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const Soporte: React.FC = () => {
  setRequestLocale('es');
  const t = useTranslations('support');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Soporte;
