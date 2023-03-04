import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../constants';
const Menu = () => {
  const { t, i18n } = useTranslation();

  const onChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  return (
    <nav>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return `link ${isActive ? 'active' : ' '}`;
          }}
        >
          {t('home')}
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return `link ${isActive ? 'active' : ' '}`;
          }}
          to="/about"
        >
          {t('about')}
        </NavLink>
      </div>
      <select defaultValue={'en'} onChange={onChangeLang}>
        {LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </nav>
  );
};
export default Menu;
