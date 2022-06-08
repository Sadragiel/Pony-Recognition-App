import { useTranslationApi } from '../../contexts/translate';
import css from './Footer.module.scss';

export const Footer = () => {
  const { language } = useTranslationApi();

  return (
    <div className={css.footer}>
      <div className={css.label}>{
        language.footer.label
      }</div>
      <img
        className={css.image} 
        alt='Princess Celestia'
        src='https://vignette.wikia.nocookie.net/infinite-loops/images/f/f4/Princess_Celestia.png/revision/latest'
      />
    </div>
  )
}