import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useTranslationApi } from "../../../contexts/translate";
import css from './Form.module.scss';

export const Form = ({ requestRecognition }: {
  requestRecognition: (image: File) => void,
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const { language } = useTranslationApi();

  const onImageUpload = useCallback((event: ChangeEvent) => {
    const image = (event.target as HTMLInputElement)?.files?.[0];
    if (!image) {
      return;
    }

    const url = URL.createObjectURL(image);

    setImageFile(image);
    setImageUrl(url);
  }, []);

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    
    if (!imageFile) {
      return;
    }

    requestRecognition(imageFile);
  }, [imageFile])

  return (
    <div className={css.formWrapper}>
      <h3 className={css.title}>
        { language.content.form.title }
      </h3>
      <form 
        className={css.form}
        onSubmit={onSubmit}
      >
        <input 
          accept="image/*" 
          type="file" 
          id="select-image"
          style={{ display: 'none' }}
          onChange={onImageUpload}
        />
        <label 
          className={css.label}
          htmlFor="select-image"
        >
          <span 
            className={css.upload}
          >
            { language.content.form.label }
          </span>
        </label>

        <button
          type="submit"
          className={css.submit}
        >
          {language.form.submit}
        </button>
      </form>
      {imageUrl && (
        <>
          <h4 className={css.uploadedImageTitle}>
            { language.content.form.uploadedImageTitle }
          </h4>
          <div className={css.uploadedImageWrapper}>
            <img 
              className={css.uploadedImage}
              src={imageUrl}
              alt="Uploaded Image Preview"
            />
        </div>
        </>
      )}
    </div>
  )
}