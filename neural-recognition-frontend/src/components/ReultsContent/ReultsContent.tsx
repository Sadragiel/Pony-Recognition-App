
import { useCallback, useEffect, useState } from 'react';
import { useTranslationApi } from '../../contexts/translate';
import { AnalyzedEntity } from '../../services/analyze.service';
import { loadAnalizeResults, SavedResultData } from '../../services/storage.service';
import css from './ReultsContent.module.scss';

export const ReultsContent = () => {
  const { language } = useTranslationApi();
  const [results, setResults] = useState<SavedResultData[]>([]);
  useEffect(() => {
    setResults(loadAnalizeResults());
  });

  const getItemLabel = useCallback((prediction: number) => {
    return `(${language.resultsContent.withProbability} ${prediction}%)`;
  }, [language]);

  return (
    <div className={css.content}>
      <div className={css.wrapper}>
        {
          results.length ? (
            <ul className={css.resultList}>
              {
                results.map(item => (
                  <li key={item.imageUrl} className={css.resultItem}>
                    <div className={css.resultImageWrapper}>
                      <img 
                        className={css.resultImage}
                        src={item.imageUrl}
                        alt={item.ponyName}
                      />
                    </div>
                    <div className={css.resultItemName}>{
                      item.ponyName
                    }</div>

                    <div className={css.resultItemPrediction}>{
                      getItemLabel(item.prediction)
                    }</div>
                  </li>
                ))
              }
            </ul>
          ) : <h3 className={css.noItemsLabel}>{
            language.resultsContent.noResults
          }</h3>
        }
      </div>
    </div>
  )
}