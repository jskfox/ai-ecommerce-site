import React from 'react';
import { useTranslations } from 'next-intl';

const Ofertas: React.FC = () => {
  const t = useTranslations('offers');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Ofertas;
