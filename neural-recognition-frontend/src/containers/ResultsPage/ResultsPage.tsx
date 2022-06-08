import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ReultsContent } from '../../components/ReultsContent';
import css from './ResultsPage.module.scss';

export const ResultsPage = () => {
  return (
    <div className={css.mainPage}>
      <div className={css.header}>
        <Header />
      </div>

      <div className={css.content}>
        <ReultsContent />
      </div>

      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  )
}