import { Content } from '../../components/Content';
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

      </div>
    </div>
  )
}