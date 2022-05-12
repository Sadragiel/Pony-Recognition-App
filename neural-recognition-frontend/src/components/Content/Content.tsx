
import { useCallback, useState } from 'react';
import css from './Content.module.scss';
import { Form } from './Form';
import { Result } from './Result';

export const Content = () => {
  const [showResults, setShowResults] = useState(false);
  const requestRecognition = useCallback((image: File) => {
    setShowResults(true);
  }, []);

  return (
    <div className={css.content}>
      <div className={css.wrapper}>
        <div className={css.form}>
          <Form requestRecognition={ requestRecognition }/>
        </div>

        {
          showResults && (
            <div className={css.results}>
              <Result />
            </div>
          )
        }
      </div>
    </div>
  )
}