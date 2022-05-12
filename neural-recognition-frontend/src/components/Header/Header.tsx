import { Logo } from "./Logo"
import css from './Header.module.scss';
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.column}>
        <div className={css.logo}>
          <Logo />
        </div>
      </div>

      <div className={css.column}>
        <div className={css.navigation}>
          <Navigation />
        </div>
      </div>

      <div className={css.column}>
        <div className={css.languageSwitcher}>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}