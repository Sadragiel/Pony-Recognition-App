import { useTranslationApi } from "../../../contexts/translate";
import { Link } from "react-router-dom";
import cx from 'classnames';
import css from './Navigation.module.scss';

const isHomeRoute = () => window.location.pathname === '/';

export const Navigation = () => {
  const { language } = useTranslationApi();

  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        <li className={css.item}>
          <Link
            className={cx(css.link, {
              [css.active]: isHomeRoute()
            })}
            to="/"
          >{ language.header.navigation.recognitionPage }</Link>
        </li>

        <li className={css.item}>
          <Link
            className={cx(css.link, {
              [css.active]: !isHomeRoute()
            })}
            to="/results"
          >{ language.header.navigation.historyPage }</Link>
        </li>
      </ul>
    </nav>
  )
}