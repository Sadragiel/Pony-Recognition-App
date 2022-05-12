import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useTranslationApi } from "../../../contexts/translate";
import css from './Result.module.scss';

const mockResults = [
  {
    name: 'Rarity',
    prediction: 80,
  },
  {
    name: 'Rainbow Dash',
    prediction: 12.5,
  },
  {
    name: 'Twilight',
    prediction: 3.8,
  },
  {
    name: 'Fluttershy',
    prediction: 1.2,
  },
]

export const Result = () => {
  const { language } = useTranslationApi();

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

        {mockResults.map(item => (
          <div className={css.row}>
            <div className={css.cell}>
              { item.name }
            </div>
            <div className={css.cell}>
              { item.prediction }
            </div>  
        </div>
        ))}
      </div>
    </div>
  )
}