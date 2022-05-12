import { Language } from "./language.interface";

export const ukrainian: Language = {
  form: {
    submit: 'Відправити',
  },
  modal: {
    confirm: 'Застосувати',
    cancel: 'Відмінити',
  },
  header: {
    logo: 'Застосунок розпізнання поні',
    languageSwitcher: {
      title: 'Налаштування',
      label: 'Мова',
      engligh: 'Англійська',
      ukrainian: 'Українська',
    },
    navigation: {
      recognitionPage: 'Розпізнання',
      historyPage: 'Історія',
    },
  },
  content: {
    form: {
      title: 'Завантажте картинку Поні, яку хочете знати краще',
      label: 'Завантажити картинку',
      uploadedImageTitle: 'Завантажене зображення',
    },
    results: {
      title: 'Результати',
      name: `Ім'я`,
      prediction: 'Вирогідність',
    },
  },
};