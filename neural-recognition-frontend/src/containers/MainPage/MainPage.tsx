import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import css from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <div className={css.header}>
        <Header />
      </div>

      <div className={css.content}>
        <Content />
      </div>

      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  )
}