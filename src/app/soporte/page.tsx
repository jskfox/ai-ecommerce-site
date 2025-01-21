import React from 'react';
import { useTranslations } from 'next-intl';

const Soporte: React.FC = () => {
  const t = useTranslations('support');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Soporte;
