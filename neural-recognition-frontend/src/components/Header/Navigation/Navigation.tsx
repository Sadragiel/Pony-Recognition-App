import { useTranslationApi } from "../../../contexts/translate";

import cx from 'classnames';
import css from './Navigation.module.scss';

export const Navigation = () => {
  const { language } = useTranslationApi();

  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        <li className={css.item}>
          <a
            className={cx(css.link, css.active)}
            href="/"
          >{ language.header.navigation.recognitionPage }</a>
        </li>

        <li className={css.item}>
          <a
            href="/"
            className={css.link}
          >{ language.header.navigation.historyPage }</a>
        </li>
      </ul>
    </nav>
  )
}