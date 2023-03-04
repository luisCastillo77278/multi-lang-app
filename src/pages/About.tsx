import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('about')}</h1>
      <span>{t('user', { name: 'Bruce wayne' })}</span>
    </main>
  );
};
export default About;
