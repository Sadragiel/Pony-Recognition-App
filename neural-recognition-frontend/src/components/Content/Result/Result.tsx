import { useTranslationApi } from "../../../contexts/translate";
import { AnalyzedEntity } from "../../../services/analyze.service";
import css from './Result.module.scss';

export const Result = ({ results: inputResults }: {
  results: AnalyzedEntity[],
}) => {
  const { language } = useTranslationApi();

  let results = inputResults.filter(result => result.prediction > 0.1);

  return (
    <div className={css.results}>
      <h5 className={css.title}>
        { language.content.results.title }
      </h5>
      <div className={css.table}>
        <div className={css.row}>
          <div className={css.cell}>
            { language.content.results.name }
          </div>
          <div className={css.cell}>
            { language.content.results.prediction }
          </div>
        </div>

        {results.map(item => (
          <div className={css.row}>
            <div className={css.cell}>
              { item.ponyName }
            </div>
            <div className={css.cell}>
              { item.prediction.toFixed(2) }
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}
