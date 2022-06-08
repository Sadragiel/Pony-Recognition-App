
import { useCallback, useState } from 'react';
import { analyze, AnalyzedEntity } from '../../services/analyze.service';
import { saveAnalizeResult } from '../../services/storage.service';
import css from './Content.module.scss';
import { Form } from './Form';
import { Result } from './Result';

export const Content = () => {
  const [results, setResults] = useState<AnalyzedEntity[]>([]);
  const requestRecognition = useCallback(async (imageFile: File, imageUrl: string) => {
    const analizationResults = await analyze(imageFile);
    
    if (analizationResults[0]) {
      saveAnalizeResult(analizationResults[0], imageUrl);
    }

    setResults(analizationResults);
  }, []);

  return (
    <div className={css.content}>
      <div className={css.wrapper}>
        <div className={css.form}>
          <Form requestRecognition={ requestRecognition }/>
        </div>

        {
          results.length ? (
            <div className={css.results}>
              <Result results={results} />
            </div>
          ) : null
        }
      </div>
    </div>
  )
}